import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface Host {
  id: number;
  name: string;
  ip_address: string;
  username?: string;
  password?: string;
}

interface Group {
  id: number;
  name: string;
  hosts: Host[];
}

interface CommandResponse {
  success: boolean;
  message: string;
  output?: string;
}

const PlaybookRunner: React.FC = () => {
  const [playbooks, setPlaybooks] = useState<string[]>([]);
  const [selectedPlaybook, setSelectedPlaybook] = useState<string>("");
  const [hosts, setHosts] = useState<Host[]>([]);
  const [groupsWithHosts, setGroupsWithHosts] = useState<Group[]>([]);
  const [selectedHosts, setSelectedHosts] = useState<number[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Fetch playbooks
  useEffect(() => {
    const fetchPlaybooks = async () => {
      try {
        const playbooks = await invoke<string[]>("list_playbooks");
        setPlaybooks(playbooks);
      } catch (error) {
        console.error("Error fetching playbooks:", error);
        setOutput(`Error fetching playbooks: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    fetchPlaybooks();
  }, []);

  // Fetch hosts and groups with hosts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hosts, groups] = await Promise.all([
          invoke<Host[]>("get_hosts"),
          invoke<Group[]>("get_groups_with_hosts")
        ]);

        setHosts(hosts);
        setGroupsWithHosts(groups.filter(group => group.hosts.length > 0));
      } catch (error) {
        console.error("Error fetching inventory:", error);
        setOutput(`Error fetching inventory: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    fetchData();
  }, []);

  // Handle host selection
  const handleHostSelection = (hostId: number) => {
    setSelectedHosts(prev => 
      prev.includes(hostId) 
        ? prev.filter(id => id !== hostId) 
        : [...prev, hostId]
    );
  };

  // Handle group selection
  const handleGroupSelection = (groupId: number) => {
    setSelectedGroups(prevGroups => {
      const isSelected = prevGroups.includes(groupId);
      const newGroups = isSelected
        ? prevGroups.filter(id => id !== groupId)
        : [...prevGroups, groupId];

      const groupHosts = groupsWithHosts.find(g => g.id === groupId)?.hosts || [];
      
      setSelectedHosts(prevHosts => isSelected
        ? prevHosts.filter(id => !groupHosts.some(h => h.id === id))
        : [...prevHosts, ...groupHosts.map(h => h.id)]
      );

      return newGroups;
    });
  };

  // Function to run the Ansible playbook
  const runPlaybook = async () => {
    if (!selectedPlaybook) {
      setOutput("Error: Please select a playbook first");
      return;
    }

    setIsRunning(true);
    setOutput("Starting playbook execution...");

    try {
      const playbookPath = await invoke<string>("get_playbook_path", { 
        playbookName: selectedPlaybook 
      });

      const response = await invoke<CommandResponse>("run_ansible_playbook", {
        params: {
          playbook: playbookPath,
          hosts: selectedHosts,
          groups: selectedGroups,
        },
      });

      setOutput(response.output || response.message);
      if (!response.success) {
        console.error("Playbook failed:", response.message);
      }
    } catch (error) {
      console.error("Error running playbook:", error);
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsRunning(false);
    }
  };

  // Get selected hosts and groups
  const selectedHostsList = hosts.filter(host => selectedHosts.includes(host.id));
  const selectedGroupsList = groupsWithHosts.filter(group => selectedGroups.includes(group.id));

  return (
    <div className="p-4 space-y-4">
      {/* Playbook Selector */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <select
          className="w-80 p-1 dark:text-black rounded-md"
          value={selectedPlaybook}
          onChange={(e) => setSelectedPlaybook(e.target.value)}
          disabled={isRunning}
        >
          <option value="">Select a playbook</option>
          {playbooks.map((playbook) => (
            <option key={playbook} value={playbook}>
              {playbook}
            </option>
          ))}
        </select>
      </div>

      {/* Inventory Selector */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <div className="flex space-x-4">
          {/* Hosts Column */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-2">Hosts</h2>
            {hosts.map((host) => (
              <label key={host.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedHosts.includes(host.id)}
                  onChange={() => handleHostSelection(host.id)}
                  className="form-checkbox"
                  disabled={isRunning}
                />
                <span>
                  {host.name} ({host.ip_address})
                </span>
              </label>
            ))}
          </div>

          {/* Groups Column */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-2">Groups</h2>
            {groupsWithHosts.length > 0 ? (
              groupsWithHosts.map((group) => (
                <div key={group.id}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedGroups.includes(group.id)}
                      onChange={() => handleGroupSelection(group.id)}
                      className="form-checkbox"
                      disabled={isRunning}
                    />
                    <span>{group.name}</span>
                  </label>
                  <div className="pl-4">
                    {group.hosts.map((host) => (
                      <label key={host.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedHosts.includes(host.id)}
                          onChange={() => handleHostSelection(host.id)}
                          className="form-checkbox"
                          disabled={isRunning}
                        />
                        <span>
                          {host.name} ({host.ip_address})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No groups with hosts found.</p>
            )}
          </div>
        </div>

        {/* Selected Items */}
        <div className="mt-6">
          <h2 className="font-bold text-lg mb-2">Selected Items</h2>
          <div className="space-y-2">
            <div>
              <h3 className="font-semibold">Selected Hosts:</h3>
              {selectedHostsList.length > 0 ? (
                <ul className="list-disc pl-5">
                  {selectedHostsList.map((host) => (
                    <li key={host.id}>
                      {host.name} ({host.ip_address})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hosts selected.</p>
              )}
            </div>
            <div>
              <h3 className="font-semibold">Selected Groups:</h3>
              {selectedGroupsList.length > 0 ? (
                <ul className="list-disc pl-5">
                  {selectedGroupsList.map((group) => (
                    <li key={group.id}>
                      {group.name} (Hosts: {group.hosts.length})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No groups selected.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Run Button */}
      <button
        onClick={runPlaybook}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        disabled={!selectedPlaybook || isRunning}
      >
        {isRunning ? "Running..." : "Run Playbook"}
      </button>

      {/* Output */}
      {output && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <h2 className="font-bold text-lg mb-2">Output:</h2>
          <pre className="whitespace-pre-wrap font-mono text-sm">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default PlaybookRunner;