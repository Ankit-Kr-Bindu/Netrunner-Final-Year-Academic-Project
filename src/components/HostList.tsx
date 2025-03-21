import React, { useState } from "react";

interface Host {
  id: number;
  name: string;
  ip_address: string | null;
  username: string | null;
  password: string | null;
}

interface HostsListProps {
  hosts: Host[];
  onEditHost: (
    id: number,
    name: string,
    ipAddress: string | null,
    username: string | null,
    password: string | null
  ) => void;
  onRemoveHost: (id: number) => void;
}

const HostsList: React.FC<HostsListProps> = ({ hosts, onEditHost, onRemoveHost }) => {
  const [editingHostId, setEditingHostId] = useState<number | null>(null);
  const [editedHostName, setEditedHostName] = useState("");
  const [editedHostIp, setEditedHostIp] = useState("");
  const [editedHostUsername, setEditedHostUsername] = useState("");
  const [editedHostPassword, setEditedHostPassword] = useState("");

  return (
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
                  <input
                    type="text"
                    value={editedHostUsername}
                    onChange={(e) => setEditedHostUsername(e.target.value)}
                    placeholder="Enter username (optional)"
                    className="p-1 border rounded bg-white dark:bg-gray-800 dark:text-white text-sm w-full mb-2"
                  />
                  <input
                    type="password"
                    value={editedHostPassword}
                    onChange={(e) => setEditedHostPassword(e.target.value)}
                    placeholder="Enter password (optional)"
                    className="p-1 border rounded bg-white dark:bg-gray-800 dark:text-white text-sm w-full mb-2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onEditHost(
                          host.id,
                          editedHostName,
                          editedHostIp || null,
                          editedHostUsername || null,
                          editedHostPassword || null
                        );
                        setEditingHostId(null);
                      }}
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
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {host.username ? `Username: ${host.username}` : "No Username"}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {host.password ? "Password: ****" : "No Password"}
                    </div>
                  </div>
                  <div className="flex gap-3 ml-auto">
                    <button
                      onClick={() => {
                        setEditingHostId(host.id);
                        setEditedHostName(host.name);
                        setEditedHostIp(host.ip_address || "");
                        setEditedHostUsername(host.username || "");
                        setEditedHostPassword(host.password || "");
                      }}
                      className="w-8 h-8 bg-transparent text-yellow-500 rounded-full border-2 border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-200 text-sm"
                      title="Edit host"
                    >
                      ✎
                    </button>
                    <button
                      onClick={() => onRemoveHost(host.id)}
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
  );
};

export default HostsList;