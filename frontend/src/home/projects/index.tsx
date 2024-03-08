import { JSX } from 'react'

export default function Projects(): JSX.Element {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col h-16 lg:h-24 p-6 lg:px-12">
      <div className="text-left text-3xl font-bold">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="sm:col-span-2 lg:row-span-2 min-h-[16rem] sm:min-h-[20rem] bg-gray-200 flex justify-center items-center rounded-md">Project 1</div>
        <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">Project 2</div>
        <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">Project 3</div>
        <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">Project 4</div>
        <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">Project 5</div>
        <div className="hidden lg:flex bg-gray-200 min-h-[16rem] justify-center items-center rounded-md">Project 6</div>
      </div>
    </div>
  )
}