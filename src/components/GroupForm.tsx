import React from "react";

interface GroupFormProps {
  newGroupName: string;
  onNewGroupNameChange: (value: string) => void;
  onAddGroup: () => void;
}

const GroupForm: React.FC<GroupFormProps> = ({ newGroupName, onNewGroupNameChange, onAddGroup }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Group Name"
          value={newGroupName}
          onChange={(e) => onNewGroupNameChange(e.target.value)}
          className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
        />
        <button
          onClick={onAddGroup}
          className="w-10 h-10 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200"
          title="Add a new group"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GroupForm;