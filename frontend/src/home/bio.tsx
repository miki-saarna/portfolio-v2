import { useState, useRef } from 'react';
import { IdentificationIcon } from '@heroicons/react/24/solid';

type Tab = 'experience' | 'skills' | 'events'

function Bio() {
  const [skillToggle, setSkillToggle] = useState<Tab>('experience');
  const [tabWidth, setTabWidth] = useState(0);

  const tab = useRef(null);

  function tabSelected(tabName: Tab): void {
    setSkillToggle(tabName);

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
    tabSelected(skillToggle);
  })

  return (
    <div className="flex flex-col lg:flex-row items-center p-6 text-gray-600 dark:text-gray-300">
      <IdentificationIcon className="h-8 w-8 text-yellow-400" />
      <div className="mt-4">I'm a fullstack software engineer with 3 years of experience, specializing in frontend, but eager to continue learning backend.</div>

      <div className="relative flex justify-between mt-4 py-2 w-full text-lg font-bold">
        <button id="experienceTab" onClick={() => tabSelected('experience')} className="px-2">Experience</button>
        <button id="skillsTab" onClick={() => tabSelected('skills')} className="px-2">Skills</button>
        <button id="eventsTab" onClick={() => tabSelected('events')} className="px-2">Events</button>
        <div
          ref={tab}
          style={{
            transform: `translateX(${tabLocation}px)`,
            width: `${tabWidth}px`
          }}
          className="absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all ease-out"
        />

        {/* experience */}
      </div>
    </div>
  );
}

export default Bio;