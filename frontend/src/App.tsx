import './App.css';
import Home from './home/index.js';
import { useState, useEffect } from 'react';
import DarkModeToggle from './utils/darkMode';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setDarkMode(localStorage.theme === 'dark' ?  true : false)
  }, [localStorage.theme])

  useEffect(() => {
    const currentMode = localStorage.theme;
    if (currentMode === 'dark') {
      document.documentElement.style.background = '#1F2937';
      document.documentElement.style.transition = 'background 200ms ease-in-out';
    } else {
      document.documentElement.style.background = '#fffef1';
      document.documentElement.style.transition = 'background 200ms ease-in-out';
    }
  }, [darkMode]);


  return (
    <div className={`${darkMode && 'dark'} App`}>
      <div className="flex justify-between items-center h-16 p-6">
        <div>Miki (logo)</div>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}  />
      </div>
      <Home />
    </div>
  );
}

export default App;
