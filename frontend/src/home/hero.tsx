import { JSX } from 'react';

export default function HeroBanner(): JSX.Element {
  return (
    <div>

      {/* headline */}
      <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between items-start p-6 lg:px-12 mt-12 lg:mt-16 text-gray-600 dark:text-gray-300">
        <div className="text-left text-4xl font-bold">
          <div>
            Hello,
          </div>
          <div>
            I'm Miki
          </div>
        </div>
        <div className="w-4/5 lg:w-72 mt-4 lg:mt-0 text-left lg:text-center text-sm lg:text-base">
          I love to expand my knowledge of programming and enjoy exploring through building new projects.
        </div>
      </div>

      {/* img */}
      <div className="w-full h-96 bg-gray-200"></div>
    </div>
  );
}
