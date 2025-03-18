import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Inventory from "./components/Inventory";
import PlaybookSelector from "./components/PlaybookSelector";
import InventorySelector from "./components/InventorySelector";
import "./main.css"; // Ensure you are importing the main.css file

function App() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [selectedPlaybook, setSelectedPlaybook] = useState<string | null>(null);

  const menuItems = ["Dashboard", " Run Playbooks", "Inventory Manager", "Logout"];

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white overflow-y-auto">
      <Sidebar
        menuItems={menuItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setSelectedPlaybook={setSelectedPlaybook}
      />
      <main className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">{selectedItem}</h1>
        {selectedItem === " Run Playbooks" ? (
          <>
          <PlaybookSelector setSelectedPlaybook={setSelectedPlaybook} />
          <InventorySelector />
          </>
        ) : selectedItem === "Inventory Manager" ? (
          <Inventory />
        ) : selectedItem === "Dashboard" ? (
          <p>Welcome to the Dashboard!</p>
        ) : selectedItem === "Logout" ? (
          <p>You have been logged out.</p>
        ) : null}
        {selectedPlaybook && (
          <div className="mt-4">
            <h2 className="text-2sm font-bold">Selected Playbook: {selectedPlaybook}</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
