import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface Host {
  id: number;
  name: string;
  ip_address: string | null;
}

interface Group {
  id: number;
  name: string;
}

const Inventory: React.FC = () => {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [newHostName, setNewHostName] = useState("");
  const [newHostIp, setNewHostIp] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedHostId, setSelectedHostId] = useState<number | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [inventory, setInventory] = useState<[string, string, string | null][]>([]);
  const [editingHostId, setEditingHostId] = useState<number | null>(null);
  const [editingGroupId, setEditingGroupId] = useState<number | null>(null);
  const [editedHostName, setEditedHostName] = useState("");
  const [editedHostIp, setEditedHostIp] = useState("");
  const [editedGroupName, setEditedGroupName] = useState("");
  const [selection, setSelection] = useState("host"); // Default to "host"
  const [reassignHostId, setReassignHostId] = useState<number | null>(null);
  const [reassignGroupId, setReassignGroupId] = useState<number | null>(null);

  // Fetch hosts and groups on component mount
  useEffect(() => {
    fetchHosts();
    fetchGroups();
    fetchInventory();
    fetchGroupHosts();
  }, []);

  // Fetch all hosts
  const fetchHosts = async () => {
    try {
      const hosts = await invoke<Host[]>("get_hosts");
      setHosts(hosts);
    } catch (error) {
      console.error("Error fetching hosts:", error);
    }
  };

  // Fetch all groups
  const fetchGroups = async () => {
    try {
      const groups = await invoke<Group[]>("get_groups");
      setGroups(groups);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  // Fetch inventory (hosts assigned to groups)
  const fetchInventory = async () => {
    try {
      const inventory = await invoke<[string, string, string | null][]>("view_inventory");
      setInventory(inventory);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  // Add a new host
  const addHost = async () => {
    if (newHostName) {
      try {
        await invoke("add_host", { name: newHostName, ipAddress: newHostIp || null });
        setNewHostName("");
        setNewHostIp("");
        fetchHosts();
      } catch (error) {
        console.error("Error adding host:", error);
      }
    }
  };

  // Remove a host by ID
  const removeHost = async (id: number) => {
    try {
      await invoke("remove_host", { id });
      fetchHosts();
    } catch (error) {
      console.error("Error removing host:", error);
    }
  };

  // Modify a host by ID
  const modifyHost = async (id: number, name: string, ipAddress: string | null) => {
    try {
      await invoke("modify_host", { id, name, ipAddress });
      setEditingHostId(null);
      fetchHosts();
    } catch (error) {
      console.error("Error modifying host:", error);
    }
  };

  // Add a new group
  const addGroup = async () => {
    if (newGroupName) {
      try {
        await invoke("add_group", { name: newGroupName });
        setNewGroupName("");
        fetchGroups();
      } catch (error) {
        console.error("Error adding group:", error);
      }
    }
  };

  // Remove a group by ID
  const removeGroup = async (id: number) => {
    try {
      await invoke("remove_group", { id });
      fetchGroups();
    } catch (error) {
      console.error("Error removing group:", error);
    }
  };

  // Modify a group by ID
  const modifyGroup = async (id: number, name: string) => {
    try {
      await invoke("modify_group", { id, name });
      setEditingGroupId(null);
      fetchGroups();
    } catch (error) {
      console.error("Error modifying group:", error);
    }
  };

  // Assign a host to a group
  const assignHostToGroup = async (hostId: number, groupId: number) => {
    try {
      const host = hosts.find((h) => h.id === hostId);
      const group = groups.find((g) => g.id === groupId);
      if (host && group) {
        await invoke("assign_host_to_group", { hostName: host.name, groupName: group.name });
        fetchInventory();
      }
    } catch (error) {
      console.error("Error assigning host to group:", error);
    }
  };

  // Reassign a host to a different group
  const reassignHost = async () => {
    if (reassignHostId && reassignGroupId) {
      try {
        const host = hosts.find((h) => h.id === reassignHostId);
        const oldGroup = inventory.find(([_, hostName]) => hostName === host?.name)?.[0];
        const newGroup = groups.find((g) => g.id === reassignGroupId);

        if (host && oldGroup && newGroup) {
          await invoke("reassign_host_to_group", {
            hostName: host.name,
            oldGroupName: oldGroup,
            newGroupName: newGroup.name,
          });
          fetchInventory();
          setReassignHostId(null);
          setReassignGroupId(null);
        }
      } catch (error) {
        console.error("Error reassigning host:", error);
      }
    }
  };

  // Remove a host from a group
  const removeHostFromGroup = async (hostName: string, groupName: string) => {
    try {
      await invoke("remove_host_from_group", { hostName, groupName });
      fetchInventory();
    } catch (error) {
      console.error("Error removing host from group:", error);
    }
  };

  const fetchGroupHosts = async () => {
    try {
      const groupHosts = await invoke<[number, number][]>("get_group_hosts");
      return groupHosts;
    } catch (error) {
      console.error("Error fetching group hosts:", error);
      return [];
    }
  };

  return (
    <div className="p-1">
      {/* Tabbed Navigation Selector */}
      <div className="mb-4">
        <div className="flex">
          <button
            onClick={() => setSelection("host")}
            className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out ${
              selection === "host"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title="Switch to Add Host section"
          >
            Add Host
          </button>
          <button
            onClick={() => setSelection("group")}
            className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out ${
              selection === "group"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title="Switch to Add Group section"
          >
            Add Group
          </button>
          <button
            onClick={() => setSelection("assign")}
            className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out ${
              selection === "assign"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title="Switch to Assign Host to Group section"
          >
            Add Host to Group
          </button>
        </div>
      </div>
  
      {/* Add Host Section */}
      {selection === "host" && (
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Host Name"
              value={newHostName}
              onChange={(e) => setNewHostName(e.target.value)}
              className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
            />
            <input
              type="text"
              placeholder="IP Address (optional)"
              value={newHostIp}
              onChange={(e) => setNewHostIp(e.target.value)}
              className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
            />
            <button
              onClick={addHost}
              className="w-10 h-10 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200"
              title="Add a new host"
            >
              +
            </button>
          </div>
        </div>
      )}
  
      {/* Add Group Section */}
      {selection === "group" && (
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Group Name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
            />
            <button
              onClick={addGroup}
              className="w-10 h-10 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200"
              title="Add a new group"
            >
              +
            </button>
          </div>
        </div>
      )}
  
      {/* Assign Host to Group Section */}
      {selection === "assign" && (
        <div className="mb-6">
          <div className="flex gap-2">
            <select
              value={selectedHostId || ""}
              onChange={(e) => setSelectedHostId(Number(e.target.value))}
              className="p-2 border rounded bg-white dark:bg-gray-800 dark:text-black"
            >
              <option value="">Select Host</option>
              {hosts.map((host) => (
                <option key={host.id} value={host.id}>
                  {host.name}
                </option>
              ))}
            </select>
            <select
              value={selectedGroupId || ""}
              onChange={(e) => setSelectedGroupId(Number(e.target.value))}
              className="p-2 border rounded bg-white dark:bg-gray-800 dark:text-black"
            >
              <option value="">Select Group</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                if (selectedHostId && selectedGroupId) {
                  assignHostToGroup(selectedHostId, selectedGroupId);
                }
              }}
              className="w-10 h-10 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200"
              title="Assign selected host to selected group"
            >
              ✓
            </button>
          </div>
        </div>
      )}
  
      {/* Hosts List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hosts</h2>
        <div className="max-h-52 overflow-y-auto border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
          <div className="grid grid-cols-4 gap-1 p-2">
            {hosts.map((host) => (
              <div key={host.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg">
                {editingHostId === host.id ? (
                  <>
                    <input
                      type="text"
                      value={editedHostName}
                      onChange={(e) => setEditedHostName(e.target.value)}
                      placeholder="Enter host name"
                      className="p-1 border rounded bg-white dark:bg-gray-800 dark:text-white text-sm w-full mb-2"
                    />
                    <input
                      type="text"
                      value={editedHostIp}
                      onChange={(e) => setEditedHostIp(e.target.value)}
                      placeholder="Enter IP address (optional)"
                      className="p-1 border rounded bg-white dark:bg-gray-800 dark:text-white text-sm w-full mb-2"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => modifyHost(host.id, editedHostName, editedHostIp || null)}
                        className="w-8 h-8 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200 text-sm"
                        title="Save changes to host"
                      >
                        ✓
                      </button>
                      <button
                        onClick={() => setEditingHostId(null)}
                        className="w-8 h-8 bg-transparent text-red-500 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 text-sm"
                        title="Cancel editing"
                      >
                        ✗
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-1">
                    <div>
                      <div className="text-sm font-semibold">{host.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {host.ip_address || "No IP"}
                      </div>
                    </div>
                    <div className="flex gap-3 ml-auto">
                      <button
                        onClick={() => {
                          setEditingHostId(host.id);
                          setEditedHostName(host.name);
                          setEditedHostIp(host.ip_address || "");
                        }}
                        className="w-8 h-8 bg-transparent text-yellow-500 rounded-full border-2 border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-200 text-sm"
                        title="Edit host"
                      >
                        ✎
                      </button>
                      <button
                        onClick={() => removeHost(host.id)}
                        className="w-8 h-8 bg-transparent text-red-500 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 text-sm"
                        title="Delete host"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Groups List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Groups</h2>
        <div className="max-h-52 overflow-y-auto border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
          <div className="grid grid-cols-4 gap-1 p-2">
            {groups.map((group) => {
              // Find hosts assigned to this group
              const assignedHosts = hosts.filter((host) =>
                inventory.some(([groupName, hostName]) => groupName === group.name && hostName === host.name)
              );
  
              return (
                <div key={group.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg">
                  {editingGroupId === group.id ? (
                    <>
                      <input
                        type="text"
                        value={editedGroupName}
                        onChange={(e) => setEditedGroupName(e.target.value)}
                        placeholder="Enter group name"
                        className="p-1 border rounded bg-white dark:bg-gray-800 dark:text-white text-sm w-full mb-2"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => modifyGroup(group.id, editedGroupName)}
                          className="w-8 h-8 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200 text-sm"
                          title="Save changes to group"
                        >
                          ✓
                        </button>
                        <button
                          onClick={() => setEditingGroupId(null)}
                          className="w-8 h-8 bg-transparent text-red-500 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 text-sm"
                          title="Cancel editing"
                        >
                          ✗
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-1">
                      <div className="text-sm font-semibold">
                        {group.name}
                        {assignedHosts.length > 0 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {" "}
                            ({assignedHosts.map((host) => host.name).join(", ")})
                          </span>
                        )}
                      </div>
                      <div className="flex gap-1 ml-auto">
                        <button
                          onClick={() => {
                            setEditingGroupId(group.id);
                            setEditedGroupName(group.name);
                          }}
                          className="w-8 h-8 bg-transparent text-yellow-500 rounded-full border-2 border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-200 text-sm"
                          title="Edit group"
                        >
                          ✎
                        </button>
                        <button
                          onClick={() => removeGroup(group.id)}
                          className="w-8 h-8 bg-transparent text-red-500 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 text-sm"
                          title="Delete group"
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
  
      {/* Inventory List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Group Inventory</h2>
        <div className="max-h-52 overflow-y-auto border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
          <div className="grid grid-cols-2 gap-1 p-2">
            {Object.entries(
              inventory.reduce((acc, [group, host, ip]) => {
                if (!acc[group]) acc[group] = [];
                acc[group].push({ host, ip });
                return acc;
              }, {} as Record<string, { host: string; ip: string | null }[]>)
            ).map(([group, groupHosts], groupIndex) => (
              <div key={groupIndex} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg">
                <div className="text-sm font-semibold mb-2">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {groupHosts.map(({ host, ip }, hostIndex) => {
                    // Find the host object from the global `hosts` state array
                    const hostObj = hosts.find((h) => h.name === host);
                    const isReassigning = reassignHostId === hostObj?.id; // Check if this host is being reassigned
  
                    return (
                      <div
                        key={hostIndex}
                        className="flex items-center gap-2 p-1 border rounded-lg bg-gray-50 dark:bg-gray-700"
                      >
                        <div className="text-sm">{host}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{ip || "N/A"}</div>
                        <div className="flex gap-1">
                          {/* Reassign Button */}
                          <button
                            onClick={() => {
                              if (hostObj) {
                                setReassignHostId(hostObj.id); // Set the correct host ID
                                setReassignGroupId(null); // Reset the group selection
                              }
                            }}
                            className={`w-6 h-6 bg-transparent text-yellow-500 rounded-full border-2 border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-200 text-xs ${
                              isReassigning ? "bg-yellow-500 text-white" : ""
                            }`}
                            title="Reassign host to another group"
                          >
                            ⚠️
                          </button>
                          {/* Delete Button */}
                          <button
                            onClick={() => removeHostFromGroup(host, group)}
                            className="w-6 h-6 bg-transparent text-red-500 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 text-xs"
                            title="Remove host from group"
                          >
                            🗑
                          </button>
                        </div>
  
                        {/* Reassign GUI (Inline) */}
                        {isReassigning && (
                          <div className="flex items-center gap-2 ml-2">
                            <select
                              value={reassignGroupId || ""}
                              onChange={(e) => setReassignGroupId(Number(e.target.value))}
                              className="p-1 border rounded bg-white dark:bg-gray-800 dark:text-black text-sm"
                            >
                              <option value="">Select Group</option>
                              {groups.map((group) => (
                                <option key={group.id} value={group.id}>
                                  {group.name}
                                </option>
                              ))}
                            </select>
                            {/* Confirm Button */}
                            <button
                              onClick={() => {
                                if (reassignGroupId) {
                                  reassignHost(); // Trigger reassignment
                                  setReassignHostId(null); // Reset reassign state
                                }
                              }}
                              className="w-6 h-6 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200 text-sm"
                              title="Confirm reassignment"
                            >
                              ✓
                            </button>
                            {/* Cancel Button */}
                            <button
                              onClick={() => setReassignHostId(null)} // Close the reassign GUI
                              className="w-6 h-6 bg-transparent text-gray-500 rounded-full border-2 border-gray-500 flex items-center justify-center hover:bg-gray-500 hover:text-white transition-all duration-200 text-sm"
                              title="Cancel reassignment"
                            >
                              ✗
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;