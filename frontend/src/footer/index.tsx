import { JSX } from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto p-6 lg:px-12 mt-24 pb-40">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="lg:flex-[3] text-5xl lg:text-6xl font-bold">
          Let's build something exciting together.
        </div>
        <div className="lg:flex-[1] flex flex-col items-end space-y-2 mt-6 lg:text-lg text-indigo-400">
          <NavLink to="/">home</NavLink>
          <NavLink to="/bio">bio</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </div>
      <div className="flex justify-around mx-auto mt-12 lg:mt-24 max-w-sm">
        <a href="https://github.com/miki-saarna" target="_blank" rel="noopener noreferrer">
          <img src={`images/github-logo-dark.svg`} alt="GitHub logo" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/mikito-saarna" target="_blank" rel="noopener noreferrer">
          <img src={`images/linkedin-logo-blue.svg`} alt="LinkedIn logo" className="w-8 h-8" />
        </a>
        <a href="https://twitter.com/MikitoSaarna" target="_blank" rel="noopener noreferrer">
          <img src={`images/x-logo-dark.svg`} alt="X (Twitter) logo" className="w-8 h-8" />
        </a>
      </div>
    </div>
  )
}