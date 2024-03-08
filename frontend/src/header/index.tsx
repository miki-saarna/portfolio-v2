import DarkModeToggle from '../utils/darkMode';

function App({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }) {

  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto flex justify-between items-center h-16 lg:h-24 p-6 lg:px-12">
      <div className="text-5xl lg:text-6xl font-bold">miki</div>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}  />
    </div>
  );
}

export default App;
