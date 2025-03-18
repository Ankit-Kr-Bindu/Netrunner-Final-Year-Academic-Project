import React from "react";
import DarkModeToggle from "./darkModeToggle";

interface SidebarProps {
  menuItems: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  setSelectedPlaybook: (playbook: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, selectedItem, setSelectedItem, setSelectedPlaybook }) => {
  return (
    <aside className="w-64 h-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white flex flex-col">
      <div className="flex items-center justify-between text-3xl font-bold pl-10 pt-2 pr-4">
        <span className="font-rubik-puddles ">Netrunner</span>
      </div>
      <div className="pl-20 text-black dark:text-white font-bold text-sm">Developed by:</div>
      <div className="pl-14 pb-4 text-black dark:text-white text-2xl font-love-light">Ankit Kumar Bindu</div>
      <nav className="flex-1 p-2 overflow-y-auto">
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
  );
};

export default Sidebar;