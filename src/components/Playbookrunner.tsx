import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface Host {
  id: number;
  name: string;
  ip_address: string;
}

interface Group {
  id: number;
  name: string;
  hosts: Host[];
}

const PlaybookRunner: React.FC = () => {
  const [playbooks, setPlaybooks] = useState<string[]>([]);
  const [selectedPlaybook, setSelectedPlaybook] = useState<string | null>(null);
  const [hosts, setHosts] = useState<Host[]>([]);
  const [groupsWithHosts, setGroupsWithHosts] = useState<Group[]>([]);
  const [selectedHosts, setSelectedHosts] = useState<number[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);
  const [output, setOutput] = useState<string>("");

  // Fetch playbooks
  useEffect(() => {
    invoke<string[]>("list_playbooks")
      .then((playbooks: string[]) => setPlaybooks(playbooks))
      .catch((error: unknown) => console.error("Error fetching playbooks:", error));
  }, []);

  // Fetch hosts and groups with hosts
  useEffect(() => {
    invoke<Host[]>("get_hosts")
      .then((hosts: Host[]) => {
        console.log("Fetched hosts:", hosts);
        setHosts(hosts);
      })
      .catch((error: unknown) => console.error("Error fetching hosts:", error));
  
    invoke<Group[]>("get_groups_with_hosts")
      .then((groups: Group[]) => {
        console.log("Fetched groups with hosts (raw):", groups);
        // Filter out groups without hosts
        const filteredGroups = groups.filter(group => group.hosts.length > 0);
        setGroupsWithHosts(filteredGroups);
      })
      .catch((error: unknown) => console.error("Error fetching groups:", error));
  }, []);

  // Handle host selection
  const handleHostSelection = (hostId: number) => {
    setSelectedHosts((prevSelectedHosts) =>
      prevSelectedHosts.includes(hostId)
        ? prevSelectedHosts.filter((id) => id !== hostId) // Deselect
        : [...prevSelectedHosts, hostId] // Select
    );
  };

  // Handle group selection
  const handleGroupSelection = (groupId: number) => {
    setSelectedGroups((prevSelectedGroups) => {
      const isSelected = prevSelectedGroups.includes(groupId);
      const newSelectedGroups = isSelected
        ? prevSelectedGroups.filter((id) => id !== groupId) // Deselect
        : [...prevSelectedGroups, groupId]; // Select

      // Get the hosts in the selected/deselected group
      const groupHosts = groupsWithHosts.find((group) => group.id === groupId)?.hosts || [];

      setSelectedHosts((prevSelectedHosts) => {
        const newSelectedHosts = isSelected
          ? prevSelectedHosts.filter((id) => !groupHosts.some((host) => host.id === id)) // Deselect hosts
          : [...prevSelectedHosts, ...groupHosts.map((host) => host.id)]; // Select hosts

        return newSelectedHosts;
      });

      return newSelectedGroups;
    });
  };

  // Function to run the Ansible playbook
  const runPlaybook = async () => {
    if (!selectedPlaybook) {
      alert("Please select a playbook.");
      return;
    }

    if (selectedHosts.length === 0 && selectedGroups.length === 0) {
      alert("Please select at least one host or group.");
      return;
    }

    try {
      const result = await invoke<string>("run_ansible_playbook", {
        playbook: selectedPlaybook,
        hosts: selectedHosts,
        groups: selectedGroups,
      });
      setOutput(result);
    } catch (error) {
      console.error("Error running playbook:", error);
      setOutput("Failed to run playbook. Check the console for details.");
    }
  };

  // Get selected hosts and groups
  const selectedHostsList = hosts.filter((host) => selectedHosts.includes(host.id));
  const selectedGroupsList = groupsWithHosts.filter((group) => selectedGroups.includes(group.id));

  return (
    <div className="p-4 space-y-4">
      {/* <h1 className="text-2xl font-bold">Ansible Playbook Runner</h1> */}

      {/* Playbook Selector */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
        <select
          className="w-80 p-1 dark:text-black rounded-md"
          onChange={(e) => setSelectedPlaybook(e.target.value)}
        >
          <option value="" disabled>Select a playbook</option>
          {playbooks.map((playbook, index) => (
            <option key={index} value={playbook}>
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
                    />
                    <span>{group.name}</span>
                  </label>
                  {/* Render hosts within the group */}
                  <div className="pl-4">
                    {group.hosts.map((host) => (
                      <label key={host.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedHosts.includes(host.id)}
                          onChange={() => handleHostSelection(host.id)}
                          className="form-checkbox"
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

        {/* Display Selected Hosts and Groups */}
        <div className="mt-6">
          <h2 className="font-bold text-lg mb-2">Selected Items</h2>
          <div className="space-y-2">
            {/* Selected Hosts */}
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

            {/* Selected Groups */}
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
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Run Playbook
      </button>

      {/* Output */}
      {output && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <h2 className="font-bold text-lg mb-2">Output:</h2>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default PlaybookRunner;