import { JSX, useState } from 'react';
import { Tab } from './types';
import Experiences from './experiences';
import Skills from './skills';
import Events from './events';

export default function Tabs(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<Tab>('experience');
  const [tabLocation, setTabLocation] = useState<number>(0);
  const [tabWidth, setTabWidth] = useState<number>(0);

  function tabSelected(tabName: Tab): void {
    setSelectedTab(tabName);

    if (tabName === 'experience') {
      const experienceTabEl: HTMLElement | null = document.getElementById('experienceTab');
      if (experienceTabEl) {
        setTabLocation(experienceTabEl.offsetLeft);
        setTabWidth(experienceTabEl.offsetWidth);
      }
    } else if (tabName === 'skills') {
      const skillsTabEl: HTMLElement | null = document.getElementById('skillsTab');
      if (skillsTabEl) {
        setTabLocation(skillsTabEl.offsetLeft);
        setTabWidth(skillsTabEl.offsetWidth);
      }
    } else {
      const eventsTabEl: HTMLElement | null = document.getElementById('eventsTab');
      if (eventsTabEl) {
        setTabLocation(eventsTabEl.offsetLeft);
        setTabWidth(eventsTabEl.offsetWidth);
      }
    }
  }

  setTimeout(() => tabSelected(selectedTab));

  return (
    <div className="flex flex-col lg:flex-row mt-6 lg:mt-12">
      <div className="lg:hidden relative flex justify-between py-2 w-full text-lg font-bold">
        <button id="experienceTab" onClick={() => tabSelected('experience')} className="px-2">Experience</button>
        <button id="skillsTab" onClick={() => tabSelected('skills')} className="px-2">Skills</button>
        <button id="eventsTab" onClick={() => tabSelected('events')} className="px-2">Events</button>
        <div
          style={{
            transform: `translateX(${tabLocation}px)`,
            width: `${tabWidth}px`
          }}
          className="absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all ease-out"
        />

      </div>
      <div className="hidden lg:flex flex-col space-y-2 min-w-[10rem]">
        <button id="experienceTab" onClick={() => tabSelected('experience')} className={`p-2 rounded-md ${selectedTab === 'experience' && 'bg-gray-800 text-white'}`}>Experience</button>
        <button id="skillsTab" onClick={() => tabSelected('skills')} className={`p-2 rounded-md ${selectedTab === 'skills' && 'bg-gray-800 text-white'}`}>Skills</button>
        <button id="eventsTab" onClick={() => tabSelected('events')} className={`p-2 rounded-md ${selectedTab === 'events' && 'bg-gray-800 text-white'}`}>Events</button>
      </div>

      {selectedTab === 'experience' && <Experiences />}
      {selectedTab === 'skills' && <Skills />}
      {selectedTab === 'events' && <Events />}
    </div>
  )
}
