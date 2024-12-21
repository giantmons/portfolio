import { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline} from "react-icons/io5";

const ThemeToggle = () => {
  // State to manage dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Store preference in localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

    // Apply the dark or light class to the <html> element
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Check if theme is saved in localStorage and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const darkMode = savedTheme === 'dark';
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="mb-4 md:mb-0 flex items-center justify-center gap-1 border rounded-lg px-4 py-2 text-xs hover:translate-y-[-2px] transition-transform duration-300 dark:text-white"
    >
      {/* Conditionally render icons based on the dark mode state */}
      {isDarkMode ? (
        <IoSunnyOutline size={20}/>
      ) : (
        <IoMoonOutline size={20}/>
      )}
    </button>
  );
};

export default ThemeToggle;
