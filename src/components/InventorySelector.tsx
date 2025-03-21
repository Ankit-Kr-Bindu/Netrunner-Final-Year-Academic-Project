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
  hosts: Host[]; // Ensure hosts is always an array
}

const InventorySelector: React.FC = () => {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [groupsWithHosts, setGroupsWithHosts] = useState<Group[]>([]);
  const [selectedHosts, setSelectedHosts] = useState<number[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);

  // Fetch groups with hosts from the backend
  useEffect(() => {
    invoke<Host[]>("get_hosts")
      .then((hosts: Host[]) => {
        console.log("Fetched hosts:", hosts);
        setHosts(hosts);
      })
      .catch((error: unknown) => console.error("Error fetching hosts:", error));

    invoke<Group[]>("get_groups_with_hosts")
      .then((groups: Group[]) => {
        console.log("Fetched groups with hosts:", groups);
        // Ensure each group has a valid hosts array
        const validatedGroups = groups.map((group) => ({
          ...group,
          hosts: group.hosts || [], // Default to empty array if hosts is undefined
        }));
        setGroupsWithHosts(validatedGroups);
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
    setSelectedGroups((prevSelectedGroups) =>
      prevSelectedGroups.includes(groupId)
        ? prevSelectedGroups.filter((id) => id !== groupId) // Deselect
        : [...prevSelectedGroups, groupId] // Select
    );
  };

  // Get selected hosts and groups
  const selectedHostsList = hosts.filter((host) => selectedHosts.includes(host.id));
  const selectedGroupsList = groupsWithHosts.filter((group) => selectedGroups.includes(group.id));

  return (
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
  );
};

export default InventorySelector;