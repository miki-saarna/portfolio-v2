import { useState } from 'react';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import Tabs from './tabs/index';
import Experiences from './tabs/experiences';
import { Tab } from './tabs/types';

export default function Bio() {

  const [selectedTab, setSelectedTab] = useState<Tab>('experience');

  return (
    <div className="flex flex-col lg:flex-row items-center p-6 text-gray-600 dark:text-gray-300">
      <IdentificationIcon className="h-8 w-8 text-yellow-400" />
      <div className="mt-4">I'm a fullstack software engineer with 3 years of experience, specializing in frontend, but eager to continue learning backend.</div>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'experience' && <Experiences />}

    </div>
  )
}