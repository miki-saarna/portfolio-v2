import { useState } from 'react';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import Tabs from './tabs/index';
import Experiences from './tabs/experiences';
import { Tab } from './tabs/types';

export default function Bio() {

  const [selectedTab, setSelectedTab] = useState<Tab>('experience');

  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col items-center p-6 lg:px-12 text-gray-600 dark:text-gray-300">
      <IdentificationIcon className="h-8 w-8 text-yellow-400" />
      <div className="mt-4 lg:max-w-xl">I'm a fullstack software engineer with 3 years of experience, specializing in frontend, but eager to continue learning backend.</div>
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-12">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === 'experience' && <Experiences />}
      </div>

    </div>
  )
}