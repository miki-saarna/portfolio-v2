import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function initDarkMode(): string {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    // document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    // document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
  return localStorage.theme;

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')
}

function DarkModeToggle({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }) {
  function toggleDarkMode() {
    setDarkMode(!darkMode);
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
  }

  return (
    darkMode
      ? <SunIcon className="h-6 w-6 text-yellow-400" onClick={toggleDarkMode} />
      : <MoonIcon className="h-6 w-6 text-indigo-400" onClick={toggleDarkMode} />
  )
}

export default DarkModeToggle