import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import DarkModeToggle from "./components/darkModeToggle";
import "./main.css"; // Ensure you are importing the main.css file

function App() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [playbooks, setPlaybooks] = useState<string[]>([]);
  const [selectedPlaybook, setSelectedPlaybook] = useState<string | null>(null);

  useEffect(() => {
    if (selectedItem === "Playbooks") {
      invoke<string[]>("list_playbooks")
        .then((playbooks: string[]) => setPlaybooks(playbooks))
        .catch((error: unknown) => console.error("Error fetching playbooks:", error));
    }
  }, [selectedItem]);

  const menuItems = ["Dashboard", "Playbooks", "Settings", "Logout"];

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <aside className="w-64 bg-gray-300 dark:bg-gray-800 text-black dark:text-white flex flex-col">
        <div className="flex items-center justify-between text-3xl font-bold pl-10 pt-2 pr-4">
          <span className="font-rubik-puddles ">Netrunner</span>
        </div>
        <div className="pl-20 text-black dark:text-white font-bold text-sm">Developed by:</div>
        <div className="pl-14 pb-4 text-black dark:text-white text-2xl font-love-light">Ankit Kumar Bindu</div>
        <nav className="flex-1 p-2">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item}
                className={`p-4 cursor-pointer ${
                  selectedItem === item ? "bg-gray-100 dark:bg-gray-700 rounded-full" : ""
                }`}
                onClick={() => {
                  setSelectedItem(item);
                  setSelectedPlaybook(null); // Reset selected playbook when changing menu item
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="pb-2 flex justify-end">
          <DarkModeToggle />
        </div>
      </aside>
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">{selectedItem}</h1>
        {selectedItem === "Playbooks" ? (
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
            <span className="pr-1 pl-2">Select a playbook: </span>
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
        ) : (
          <p>Content for {selectedItem}</p>
        )}
        {selectedPlaybook && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Selected Playbook: {selectedPlaybook}</h2>
            <p>Details and content for {selectedPlaybook}...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
