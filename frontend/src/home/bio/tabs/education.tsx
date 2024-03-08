import { JSX } from 'react';
// import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import Tag from '../../../components/tag';

export default function Experiences(): JSX.Element {
  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="flex">
        {/* img */}
        <div className="h-8 min-w-8 rounded-full bg-gray-200"></div>
        <div className="flex flex-col ml-6 text-left">

          <div className="flex items-center flex-wrap gap-2 lg:gap-3">
            <div className="text-xl font-bold">Solidity Development</div>
            <Tag color="bg-yellow-400" className="pulsating-tag">In progress</Tag>
          </div>
          
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Speed Run Ethereum</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        {/* img */}
        <div className="h-8 min-w-8 rounded-full bg-gray-200"></div>
        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">Software Engineering Flex</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Thinkful</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
    </div>
  )
}