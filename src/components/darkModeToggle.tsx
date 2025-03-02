import { useEffect, useState } from "react";
import "../main.css";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <label className="relative inline-block w-16 h-7">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="opacity-0 w-0 h-0"
      />
      <span className="absolute w-14 h-full bg-white rounded-full transition duration-300 dark:bg-black"></span>
      <span className={`absolute left-1.5  top-1 w-5 h-5 bg-black  dark:bg-white rounded-full transition-transform  transform ${darkMode ? 'translate-x-6' : ''}`}></span>
    </label>
  );
}