import { JSX } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function initDarkMode(): void {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    // document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    // document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
  // return localStorage.theme;

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')
}

function DarkModeToggle({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }): JSX.Element {
  initDarkMode();

  function toggleDarkMode(): void {
    setDarkMode(!darkMode);
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
  }

  return (
    <button onClick={toggleDarkMode} className="relative border border-gray-400 p-1 w-12 h-6 rounded-full bg-gray-50 focus-visible:outline-indigo-400 dark:bg-gray-600 dark:focus-visible:outline-yellow-400">
      <div className="absolute top-1/2 left-0 dark:left-full dark:-translate-x-full -translate-y-1/2 transition-[left,transform] duration-300 ease-out">
          {darkMode
            ? <SunIcon className="h-5 w-5 text-yellow-400" />
            : <MoonIcon className="h-5 w-5 text-indigo-400" />}
      </div>
    </button>
  )
}

export default DarkModeToggle