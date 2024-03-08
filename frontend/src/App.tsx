import './App.css';
import Home from './home/index';
import { useState, useEffect } from 'react';
import Header from './header/index';

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
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
    </div>
  );
}

export default App;
