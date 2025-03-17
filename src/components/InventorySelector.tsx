import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface InventoryItem {
  id: number;
  name: string;
  ip_address: string;
}

const InventorySelector: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    invoke<InventoryItem[]>("fetch_inventory")
      .then((inventory: InventoryItem[]) => setInventory(inventory))
      .catch((error: unknown) => console.error("Error fetching inventory:", error));
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
      <select className="w-80 p-1 dark:text-black rounded-md">
        <option value="" disabled>Select an inventory </option>
        {inventory.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} ({item.ip_address})
          </option>
        ))}
      </select>
    </div>
  );
};

export default InventorySelector;
