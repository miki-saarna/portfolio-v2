import { JSX } from 'react';
import Tabs from './tabs/index';

export default function Bio(): JSX.Element {
  return (
    <div className="bg-white dark:bg-[#111827] transition-[background-color] duration-200 ease-in-out">
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center py-16 dark:border-y">
          <div className="lg:max-w-xl text-center text-text-light dark:text-gray-300">I'm a fullstack software engineer with 3 years of experience, specializing in frontend, but eager to continue learning backend.</div>
          <Tabs />
        </div>
      </div>
    </div>
  )
}