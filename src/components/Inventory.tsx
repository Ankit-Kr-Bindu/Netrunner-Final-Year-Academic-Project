// Inventory.tsx
import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import HostsList from "./HostList";
import GroupsList from "./GroupList";
import InventoryList from "./InventoryList";
import HostForm from "./HostForm";
import GroupForm from "./GroupForm";
import AssignHostToGroupForm from "./AssignHostToGroupForm";

interface Host {
  id: number;
  name: string;
  ip_address: string | null;
  username: string | null;
  password: string | null;
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
  const [newHostUsername, setNewHostUsername] = useState("");
  const [newHostPassword, setNewHostPassword] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedHostId, setSelectedHostId] = useState<number | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [inventory, setInventory] = useState<[string, string, string | null][]>([]);
  const [selection, setSelection] = useState("host");

  useEffect(() => {
    fetchHosts();
    fetchGroups();
    fetchInventory();
  }, []);

  const fetchHosts = async () => {
    try {
      const hosts = await invoke<Host[]>("get_hosts");
      setHosts(hosts);
    } catch (error) {
      console.error("Error fetching hosts:", error);
    }
  };

  const fetchGroups = async () => {
    try {
      const groups = await invoke<Group[]>("get_groups");
      setGroups(groups);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const fetchInventory = async () => {
    try {
      const inventory = await invoke<[string, string, string | null][]>("view_inventory");
      setInventory(inventory);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const addHost = async () => {
    try {
      console.log("Adding host with values:", {
        name: newHostName,
        ip_address: newHostIp,
        username: newHostUsername,
        password: newHostPassword,
      });
      
      await invoke("add_host", {
        name: newHostName,
        ip_address: newHostIp || null,
        username: newHostUsername || null,
        password: newHostPassword || null,
      });
      
      fetchHosts();
      setNewHostName("");
      setNewHostIp("");
      setNewHostUsername("");
      setNewHostPassword("");
    } catch (error) {
      console.error("Error adding host:", error);
    }
  };

  const removeHost = async (id: number) => {
    try {
      await invoke("remove_host", { id });
      fetchHosts();
    } catch (error) {
      console.error("Error removing host:", error);
    }
  };

  const modifyHost = async (id: number, name: string, ipAddress: string | null, username: string | null, password: string | null) => {
    try {
      await invoke("modify_host", { id, name, ipAddress, username, password });
      fetchHosts();
    } catch (error) {
      console.error("Error modifying host:", error);
    }
  };

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

  const removeGroup = async (id: number) => {
    try {
      await invoke("remove_group", { id });
      fetchGroups();
    } catch (error) {
      console.error("Error removing group:", error);
    }
  };

  const modifyGroup = async (id: number, name: string) => {
    try {
      await invoke("modify_group", { id, name });
      fetchGroups();
    } catch (error) {
      console.error("Error modifying group:", error);
    }
  };

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

  const removeHostFromGroup = async (hostName: string, groupName: string) => {
    try {
      await invoke("remove_host_from_group", { hostName, groupName });
      fetchInventory();
    } catch (error) {
      console.error("Error removing host from group:", error);
    }
  };

  const reassignHost = async (hostId: number, newGroupId: number) => {
    try {
      const host = hosts.find((h) => h.id === hostId);
      const newGroup = groups.find((g) => g.id === newGroupId);
      const oldGroup = inventory.find(([_, hostName]) => hostName === host?.name)?.[0];

      if (host && oldGroup && newGroup) {
        await invoke("reassign_host_to_group", {
          hostName: host.name,
          oldGroupName: oldGroup,
          newGroupName: newGroup.name,
        });
        fetchInventory();
      }
    } catch (error) {
      console.error("Error reassigning host:", error);
    }
  };

  return (
    <div className="p-1">
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

      {selection === "host" && (
        <HostForm
          newHostName={newHostName}
          setNewHostName={setNewHostName}
          newHostIp={newHostIp}
          setNewHostIp={setNewHostIp}
          newHostUsername={newHostUsername}
          setNewHostUsername={setNewHostUsername}
          newHostPassword={newHostPassword}
          setNewHostPassword={setNewHostPassword}
          addHost={addHost}
        />
      )}

      {selection === "group" && (
        <GroupForm
          newGroupName={newGroupName}
          onNewGroupNameChange={setNewGroupName}
          onAddGroup={addGroup}
        />
      )}

      {selection === "assign" && (
        <AssignHostToGroupForm
          hosts={hosts}
          groups={groups}
          selectedHostId={selectedHostId}
          selectedGroupId={selectedGroupId}
          onHostChange={setSelectedHostId}
          onGroupChange={setSelectedGroupId}
          onAssign={() => {
            if (selectedHostId && selectedGroupId) {
              assignHostToGroup(selectedHostId, selectedGroupId);
            }
          }}
        />
      )}

      <HostsList
        hosts={hosts}
        onEditHost={modifyHost}
        onRemoveHost={removeHost}
      />

      <GroupsList
        groups={groups}
        hosts={hosts}
        inventory={inventory}
        onEditGroup={modifyGroup}
        onRemoveGroup={removeGroup}
      />

      <InventoryList
        inventory={inventory}
        hosts={hosts}
        groups={groups}
        onReassignHost={reassignHost}
        onRemoveHostFromGroup={removeHostFromGroup}
      />
    </div>
  );
};

export default Inventory;