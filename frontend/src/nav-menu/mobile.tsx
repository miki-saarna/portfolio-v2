import { JSX, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './mobileMenu.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CSSTransition } from 'react-transition-group';

export default function NavMenu({ mobileNavMenuOpen, setMobileNavMenuOpen }: { mobileNavMenuOpen: boolean, setMobileNavMenuOpen: Function }): JSX.Element {

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
      <div className={`fixed z-[1] top-0 w-9/12 h-screen min-h-screen bg-black/60 transition-[right] duration-300 ease-in-out ${mobileNavMenuOpen ? 'right-0' : 'right-[-100%]'}`}>
        <button onClick={() => setMobileNavMenuOpen(false)} className="absolute top-0 right-0 mt-4 mr-5 w-8 h-8 text-white">
          <XMarkIcon />
        </button>
        hello world
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
