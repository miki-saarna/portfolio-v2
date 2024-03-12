import { JSX, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/index';
import Header from './header/index';
import Footer from './footer/index';
import Bio from './bio/index';
import Projects from './projects/index';
import Contact from './contact/index';
import NotFound from './utils/notFound';

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
      document.documentElement.style.background = '#fff8f0';
      document.documentElement.style.transition = 'background 200ms ease-in-out';
    }
  }, [darkMode]);


  return (
    <div className={`${darkMode && 'dark'} App`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
