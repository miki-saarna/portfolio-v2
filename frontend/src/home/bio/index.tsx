import { JSX } from 'react';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import Tabs from './tabs/index';

export default function Bio(): JSX.Element {
  return (
    <div className="bg-white dark:bg-[#111827] transition-[background-color] duration-200 ease-in-out">
      <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col items-center py-16 px-6 lg:px-12">
        <div className="lg:max-w-xl text-center text-text-light dark:text-gray-300">I'm a fullstack software engineer with 3 years of experience, specializing in frontend, but eager to continue learning backend.</div>
        <Tabs />
      </div>
    </div>
  )
}