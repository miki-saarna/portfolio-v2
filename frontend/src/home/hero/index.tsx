import { JSX } from 'react';
import './index.css'

export default function HeroBanner(): JSX.Element {
  return (
    <div>

      {/* headline */}
      <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between items-start pt-16 px-6 lg:px-12 lg:mt-12 lg:mt-6">
        {/* 1 */}
        <div className="text-center lg:text-left text-4xl font-bold" style={{ flex: 1 }}>
          <div>
            Hello,
          </div>
          <div>
            I'm Miki
          </div>

          <div className="lg:hidden mt-6 mb-3 text-lg font-medium">
            I love to expand my knowledge of programming and enjoy exploring through building new projects.
          </div>
        </div>

        {/* 3: img */}
        <img
          src={`images/mikito-saarna-portrait.png`}
          alt="Portrait of Mikito Saarna"
          className="mx-auto w-96"
          style={{ flex: 1 }}
        />
        <img
          src={`images/pink-cloud.png`}
          alt="Pinkish cloud background image"
          className="absolute z-[-1] top-[200px] sm:top-[175px] lg:top-[50px] left-1/2 -translate-x-1/2 pulsating-cloud"
        />

        {/* 2 */}
        <div className="hidden lg:block text-center text-lg" style={{ flex: 1 }}>
          I love to expand my knowledge of programming and enjoy exploring through building new projects.
        </div>
      </div>

    </div>
  );
}
