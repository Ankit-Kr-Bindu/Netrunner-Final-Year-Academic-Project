import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface Host {
  name: string;
  ip_address: string;
}

interface Group {
  name: string;
}

const Inventory: React.FC = () => {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [newHostName, setNewHostName] = useState("");
  const [newHostIp, setNewHostIp] = useState("");
  const [newGroupName, setNewGroupName] = useState("");

  useEffect(() => {
    fetchHosts();
    fetchGroups();
  }, []);

  const fetchHosts = () => {
    invoke<Host[]>("get_hosts")
      .then((hosts: Host[]) => setHosts(hosts))
      .catch((error: unknown) => console.error("Error fetching hosts:", error));
  };

  const fetchGroups = () => {
    invoke<Group[]>("get_groups")
      .then((groups: Group[]) => setGroups(groups))
      .catch((error: unknown) => console.error("Error fetching groups:", error));
  };

  const addHost = () => {
    if (newHostName && newHostIp) {
      invoke("add_host", { name: newHostName, ipAddress: newHostIp })
        .then(() => {
          fetchHosts();
          setNewHostName("");
          setNewHostIp("");
        })
        .catch((error: unknown) => console.error("Error adding host:", error));
    }
  };

  const removeHost = (name: string) => {
    invoke("remove_host", { name })
      .then(() => fetchHosts())
      .catch((error: unknown) => console.error("Error removing host:", error));
  };

  const modifyHost = (oldName: string, newName: string, newIpAddress: string) => {
    invoke("modify_host", { oldName, newName, newIpAddress })
      .then(() => fetchHosts())
      .catch((error: unknown) => console.error("Error modifying host:", error));
  };

  const addGroup = () => {
    if (newGroupName) {
      invoke("add_group", { name: newGroupName })
        .then(() => {
          fetchGroups();
          setNewGroupName("");
        })
        .catch((error: unknown) => console.error("Error adding group:", error));
    }
  };

  const removeGroup = (name: string) => {
    invoke("remove_group", { name })
      .then(() => fetchGroups())
      .catch((error: unknown) => console.error("Error removing group:", error));
  };

  const modifyGroup = (oldName: string, newName: string) => {
    invoke("modify_group", { oldName, newName })
      .then(() => fetchGroups())
      .catch((error: unknown) => console.error("Error modifying group:", error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Hosts</h2>
      <ul>
        {hosts.map((host, index) => (
          <li key={index}>
            {host.name} ({host.ip_address})
            <button onClick={() => removeHost(host.name)}>Remove</button>
            <button onClick={() => modifyHost(host.name, "New Name", "New IP")}>Modify</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Host Name"
          value={newHostName}
          onChange={(e) => setNewHostName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Host IP Address"
          value={newHostIp}
          onChange={(e) => setNewHostIp(e.target.value)}
        />
        <button onClick={addHost}>Add Host</button>
      </div>
      <h2 className="text-2xl font-bold">Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            {group.name}
            <button onClick={() => removeGroup(group.name)}>Remove</button>
            <button onClick={() => modifyGroup(group.name, "New Group Name")}>Modify</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Group Name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
        />
        <button onClick={addGroup}>Add Group</button>
      </div>
    </div>
  );
};

export default Inventory;