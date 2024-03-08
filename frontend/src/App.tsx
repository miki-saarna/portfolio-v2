import { JSX, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/index';
import Header from './header/index';
import Footer from './footer/index';

function App(): JSX.Element {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<div>bio page</div>} />
        <Route path="/projects" element={<div>projects page</div>} />
        <Route path="/contact" element={<div>contact page</div>} />
      </Routes>
    </div>
  );
}

export default App;
