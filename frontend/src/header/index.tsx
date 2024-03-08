import { JSX } from 'react';
import DarkModeToggle from '../utils/darkMode';
import { Bars3Icon } from '@heroicons/react/24/solid';

function App({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }): JSX.Element {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto flex justify-between items-center h-16 lg:h-24 p-6 lg:px-12">
      <div className="text-5xl lg:text-6xl font-bold">miki</div>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} className="hidden lg:block" />
      <button className="lg:hidden w-6 h-6">
        <Bars3Icon />
      </button>
    </div>
  );
}

export default App;
