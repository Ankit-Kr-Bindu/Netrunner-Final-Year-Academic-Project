import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface PlaybookSelectorProps {
  setSelectedPlaybook: (playbook: string | null) => void;
}

const PlaybookSelector: React.FC<PlaybookSelectorProps> = ({ setSelectedPlaybook }) => {
  const [playbooks, setPlaybooks] = useState<string[]>([]);

  useEffect(() => {
    invoke<string[]>("list_playbooks")
      .then((playbooks: string[]) => setPlaybooks(playbooks))
      .catch((error: unknown) => console.error("Error fetching playbooks:", error));
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
      {/* <span className="pr-1 pl-2">Select a playbook: </span> */}
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
  );
};

export default PlaybookSelector;