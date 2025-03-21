import React, { useState } from "react";

interface Host {
  id: number;
  name: string;
  ip_address: string | null;
}

interface Group {
  id: number;
  name: string;
}

interface InventoryListProps {
  inventory: [string, string, string | null][];
  hosts: Host[];
  groups: Group[];
  onReassignHost: (hostId: number, newGroupId: number) => void;
  onRemoveHostFromGroup: (hostName: string, groupName: string) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({
  inventory,
  hosts,
  groups,
  onReassignHost,
  onRemoveHostFromGroup,
}) => {
  const [reassignHostId, setReassignHostId] = useState<number | null>(null);
  const [reassignGroupId, setReassignGroupId] = useState<number | null>(null);

  return (
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
                  const hostObj = hosts.find((h) => h.name === host);
                  const isReassigning = reassignHostId === hostObj?.id;

                  return (
                    <div
                      key={hostIndex}
                      className="flex items-center gap-2 p-1 border rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                      <div className="text-sm">{host}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{ip || "N/A"}</div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => {
                            if (hostObj) {
                              setReassignHostId(hostObj.id);
                              setReassignGroupId(null);
                            }
                          }}
                          className={`w-6 h-6 bg-transparent text-yellow-500 rounded-full border-2 border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-200 text-xs ${
                            isReassigning ? "bg-yellow-500 text-white" : ""
                          }`}
                          title="Reassign host to another group"
                        >
                          ⚠️
                        </button>
                        <button
                          onClick={() => onRemoveHostFromGroup(host, group)}
                          className="w-6 h-6 bg-transparent text-red-500 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 text-xs"
                          title="Remove host from group"
                        >
                          🗑
                        </button>
                      </div>

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
                          <button
                            onClick={() => {
                              if (reassignGroupId) {
                                onReassignHost(reassignHostId, reassignGroupId);
                                setReassignHostId(null);
                              }
                            }}
                            className="w-6 h-6 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200 text-sm"
                            title="Confirm reassignment"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => setReassignHostId(null)}
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
  );
};

export default InventoryList;