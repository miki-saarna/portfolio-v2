import { JSX } from 'react';
import Tag from '../../../components/tag';

export default function Skills(): JSX.Element {

  // function genCustomAnimationStyle(): { animationDuration: string } {
  //   const duration = Math.max(Math.floor(Math.random() * 7000), 4000)
  //   return {
  //     animationDuration: duration + 'ms'
  //   };
  // }

  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="">
        <div className="text-xl font-bold">
          Pro
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {/* <Tag color="bg-blue-300" className="floating-tag" style={genCustomAnimationStyle()}>JavaScript</Tag> */}
          <Tag color="bg-blue-300">JavaScript</Tag>
          <Tag color="bg-blue-300">TypeScript</Tag>
          <Tag color="bg-blue-300">Node</Tag>
          <Tag color="bg-blue-300">HTML</Tag>
          <Tag color="bg-blue-300">CSS</Tag>
          <Tag color="bg-green-300">React</Tag>
          <Tag color="bg-green-300">Vue</Tag>
          <Tag color="bg-green-300">Tailwind CSS</Tag>
          <Tag color="bg-orange-300">Git</Tag>
          <Tag color="bg-orange-300">GitHub Desktop</Tag>
          <Tag color="bg-orange-300">VSCode</Tag>
          <Tag color="bg-orange-300">Prompt engineering</Tag>
          <Tag color="bg-orange-300">RESTful APIs</Tag>
        </div>
      </div>
      <div className="pt-6">
        <div className="text-xl font-bold">
          Intermediate
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Tag color="bg-blue-300">Solidity</Tag>
          <Tag color="bg-blue-300">Python</Tag>
          <Tag color="bg-blue-300">SQL</Tag>
          <Tag color="bg-green-300">PostgreSQL</Tag>
          <Tag color="bg-green-300">Flask</Tag>
          <Tag color="bg-green-300">Hardhat</Tag>
          <Tag color="bg-green-300">Foundry</Tag>
          <Tag color="bg-green-300">ElementUI</Tag>
          <Tag color="bg-green-300">Bootstrap</Tag>
          <Tag color="bg-green-300">Express</Tag>
          <Tag color="bg-green-300">Knex</Tag>
        </div>
      </div>
      <div className="pt-6">
        <div className="text-xl font-bold">
          Dabbled
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Tag color="bg-blue-300">Go</Tag>
          <Tag color="bg-blue-300">Rust</Tag>
          <Tag color="bg-blue-300">MongoDB</Tag>
          <Tag color="bg-green-300">Substrate</Tag>
          <Tag color="bg-green-300">Mocha</Tag>
          <Tag color="bg-green-300">Chai</Tag>
          <Tag color="bg-green-300">Cypress</Tag>
          <Tag color="bg-green-300">Axios</Tag>
          <Tag color="bg-orange-300">AWS</Tag>
        </div>
      </div>
      <div className="pt-6">
        <div className="text-xl font-bold">
          Soft skills
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Tag color="bg-indigo-300">Curious</Tag>
          <Tag color="bg-red-300">Team player</Tag>
          <Tag color="bg-indigo-300">Always learning</Tag>
          <Tag color="bg-red-300">Transparent</Tag>
          <Tag color="bg-indigo-300">Innovative</Tag>
          <Tag color="bg-red-300">Kind</Tag>
          <Tag color="bg-indigo-300">Optimistic</Tag>
        </div>
      </div>
    </div>
  )
}