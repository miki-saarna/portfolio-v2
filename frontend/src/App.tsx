import './App.css';
import Home from './home/index.js';
import { useState } from 'react';
import DarkModeToggle from './utils/darkMode';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={`${darkMode && 'dark'} App`}>
      <div className="flex justify-between items-center h-16 lg:h-40 p-4 bg-warmth border border-red-500">
        <div>Miki (logo)</div>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}  />
      </div>
      <Home />
    </div>
  );
}

export default App;
