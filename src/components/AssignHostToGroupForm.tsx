// components/AssignHostToGroupForm.tsx
import React from "react";

interface AssignHostToGroupFormProps {
  hosts: { id: number; name: string }[];
  groups: { id: number; name: string }[];
  selectedHostId: number | null;
  selectedGroupId: number | null;
  onHostChange: (id: number) => void;
  onGroupChange: (id: number) => void;
  onAssign: () => void;
}

const AssignHostToGroupForm: React.FC<AssignHostToGroupFormProps> = ({
  hosts,
  groups,
  selectedHostId,
  selectedGroupId,
  onHostChange,
  onGroupChange,
  onAssign,
}) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <select
          value={selectedHostId || ""}
          onChange={(e) => onHostChange(Number(e.target.value))}
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
          onChange={(e) => onGroupChange(Number(e.target.value))}
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
          onClick={onAssign}
          className="w-10 h-10 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200"
          title="Assign selected host to selected group"
        >
          ✓
        </button>
      </div>
    </div>
  );
};

export default AssignHostToGroupForm;