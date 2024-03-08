import { JSX, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../utils/darkMode';
import './mobileMenu.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CSSTransition } from 'react-transition-group';

export default function NavMenu({ mobileNavMenuOpen, setMobileNavMenuOpen, darkMode, setDarkMode }: { mobileNavMenuOpen: boolean, setMobileNavMenuOpen: Function, darkMode: boolean, setDarkMode: Function }): JSX.Element {

  const pageOverlayRef = useRef(null);

  useEffect(() => {
    if (mobileNavMenuOpen) {
      document.body.classList.add('scrolling-disabled');
    } else {
      document.body.classList.remove('scrolling-disabled');
    }
  }, [mobileNavMenuOpen])

  return (
    <>
      <div className={`fixed z-[1] top-0 w-9/12 h-screen min-h-screen flex flex-col py-4 sm:py-8 md:py-12 px-6 bg-black/60 transition-[right] duration-300 ease-in-out ${mobileNavMenuOpen ? 'right-0' : 'right-[-100%]'}`}>
        <div className="mx-auto w-full max-w-md">
          <div className="flex justify-between items-center">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button onClick={() => setMobileNavMenuOpen(false)} className="w-8 h-8 text-indigo-100">
              <XMarkIcon />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-12 text-2xl font-bold text-indigo-100">
            <NavLink to="/" onClick={() => setMobileNavMenuOpen(false)} style={{ textShadow: "#E0E7FFB3 0 0 8px" }}>home</NavLink>
            <NavLink to="/bio" onClick={() => setMobileNavMenuOpen(false)} style={{ textShadow: "#E0E7FFB3 0 0 8px" }}>bio</NavLink>
            <NavLink to="/projects" onClick={() => setMobileNavMenuOpen(false)} style={{ textShadow: "#E0E7FFB3 0 0 8px" }}>projects</NavLink>
            <NavLink to="/contact" onClick={() => setMobileNavMenuOpen(false)} style={{ textShadow: "#E0E7FFB3 0 0 8px" }}>contact</NavLink>
          </div>
          <div className="flex justify-around mt-20">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      <CSSTransition mountOnEnter={false} nodeRef={pageOverlayRef} in={mobileNavMenuOpen} timeout={1000} classNames="page-overlay">
        <div
          ref={pageOverlayRef}
          onClick={() => setMobileNavMenuOpen(false)}
          className={`fixed top-0 left-0 w-screen min-w-screen h-screen min-h-screen bg-black/80 ${!mobileNavMenuOpen && 'opacity-0 pointer-events-none'}`}
        />
      </CSSTransition>
    </>
  )
}
