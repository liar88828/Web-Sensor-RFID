'use client'
import React, {useEffect, useState} from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">

      <button
        // onClick={() => setTheme("light")}
        className="text-gray-300 rounded-full outline-none focus:outline-none">
        <span className="sr-only">Light Mode</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
      </button>


    </div>
  );
};

export default ThemeChanger;
