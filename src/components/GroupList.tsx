import React, { useState } from "react";

interface Group {
  id: number;
  name: string;
}

interface GroupsListProps {
  groups: Group[];
  hosts: { id: number; name: string; ip_address: string | null }[];
  inventory: [string, string, string | null][];
  onEditGroup: (id: number, name: string) => void;
  onRemoveGroup: (id: number) => void;
}

const GroupsList: React.FC<GroupsListProps> = ({ groups, hosts, inventory, onEditGroup, onRemoveGroup }) => {
  const [editingGroupId, setEditingGroupId] = useState<number | null>(null);
  const [editedGroupName, setEditedGroupName] = useState("");

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Groups</h2>
      <div className="max-h-52 overflow-y-auto border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
        <div className="grid grid-cols-4 gap-1 p-2">
          {groups.map((group) => {
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
                        onClick={() => {
                          onEditGroup(group.id, editedGroupName);
                          setEditingGroupId(null);
                        }}
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
                        onClick={() => onRemoveGroup(group.id)}
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
  );
};

export default GroupsList;