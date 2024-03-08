import { JSX } from 'react';
import { ExclamationTriangleIcon, WrenchScrewdriverIcon, BeakerIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function UnderConstruction({ pageName }: { pageName?: string }): JSX.Element {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto p-6 lg:px-12 mt-24 mb-40">
      <div className="relative flex flex-col justify-center items-center space-y-4 lg:space-y-6 p-6 h-full rounded-md animate-pulse bg-indigo-50 text-indigo-500 text-2xl font-bold">

        {pageName && <div className="absolute top-4 left-6 text-base font-medium">{ pageName }</div>}

        <div className="flex items-center">
          <div className="py-1 px-2 rounded-md bg-red-100">Page in progress</div>
          <ExclamationTriangleIcon className="ml-4 lg:ml-8 py-1 px-2 w-10 h-10 rounded-full bg-red-100" />
        </div>
        <div className="flex items-center">
          <WrenchScrewdriverIcon className="mr-4 lg:mr-4 py-1 px-2 w-10 h-10 rounded-full bg-yellow-100" />
          <div className="py-1 px-2 rounded-md bg-yellow-100">Construction zone</div>
        </div>
        <div className="flex items-center">
          <div className="py-1 px-2 rounded-md bg-blue-100">Experimentation</div>
          <BeakerIcon className="ml-4 lg:ml-8 py-1 px-2 w-10 h-10 rounded-full bg-blue-100" />
        </div>
        <div className="flex items-center">
          <CodeBracketIcon className="mr-4 lg:mr-4 py-1 px-2 w-10 h-10 rounded-full bg-green-100" />
          <div className="py-1 px-2 rounded-md bg-green-100">Development phase</div>
        </div>
      </div>

    </div>
  )
}