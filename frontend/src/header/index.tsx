import { JSX } from 'react';
// import { JSX, useState } from 'react';
import DarkModeToggle from '../utils/darkMode';
// import { Bars3Icon } from '@heroicons/react/24/solid';
// import MobileNavMenu from '../nav-menu/mobile';
import { NavLink } from 'react-router-dom';

function App({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }): JSX.Element {
  // const [mobileNavMenuOpen, setMobileNavMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="max-w-2xl lg:max-w-6xl mx-auto flex justify-between items-center h-16 lg:h-24 p-6 lg:px-12">
        <NavLink to="/" className="text-5xl lg:text-6xl font-bold">miki</NavLink>
        <div className="hidden lg:flex space-x-12 justify-between w-full max-w-md text-xl font-bold text-indigo-400 dark:text-indigo-300">
          <NavLink to="/">home</NavLink>
          <NavLink to="/bio">bio</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} className="hidden lg:block" /> */}
        {/* <button onClick={() => setMobileNavMenuOpen(true)} className="lg:hidden w-8 h-8">
          <Bars3Icon />
        </button> */}
      </div>
      {/* <MobileNavMenu mobileNavMenuOpen={mobileNavMenuOpen} setMobileNavMenuOpen={setMobileNavMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </>
  );
}

export default App;
