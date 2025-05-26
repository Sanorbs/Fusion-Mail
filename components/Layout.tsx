"use client";
import { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      <header className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Fusion Mail</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="text-sm bg-primary text-white px-3 py-1 rounded">
          Toggle Dark Mode
        </button>
      </header>
      {children}
    </div>
  );
};

export default Layout;
