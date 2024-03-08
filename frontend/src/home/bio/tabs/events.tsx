import { JSX } from 'react';

export default function Events(): JSX.Element {
  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="flex">
        {/* img */}
        <div className="h-8 min-w-8 rounded-full bg-gray-200"></div>
        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">ETHDenver 2024</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Denver, CO</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        {/* img */}
        <div className="h-8 min-w-8 rounded-full bg-gray-200"></div>
        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">Competitive security audit: Soulmates</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Remote</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        {/* img */}
        <div className="h-8 min-w-8 rounded-full bg-gray-200"></div>
        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">Vueconf US</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Miami, FL</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
    </div>
  )
}