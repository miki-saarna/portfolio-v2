import { useState } from 'react';
import { Tab } from './types';

export default function Tabs({ selectedTab, setSelectedTab }: { selectedTab: Tab, setSelectedTab: Function }) {

  const [tabLocation, setTabLocation] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);

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

  setTimeout(() => {
    tabSelected(selectedTab);
  })

  return (
    <div className="relative flex justify-between mt-4 py-2 w-full text-lg font-bold">
      <button id="experienceTab" onClick={() => tabSelected('experience')} className="px-2">Experience</button>
      <button id="skillsTab" onClick={() => tabSelected('skills')} className="px-2">Skills</button>
      <button id="eventsTab" onClick={() => tabSelected('events')} className="px-2">Other</button>
      <div
        style={{
          transform: `translateX(${tabLocation}px)`,
          width: `${tabWidth}px`
        }}
        className="absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all ease-out"
      />

    </div>
  )
}
