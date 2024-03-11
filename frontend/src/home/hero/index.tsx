import { JSX, useEffect } from 'react';
import { useImages } from '../../state/images';
import { GetImageFromS3 } from '../../utils/index';

export default function HeroBanner(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  useEffect(() => {
    if (!imageSrcMap.portrait) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/portrait/${'mikito-saarna-portrait.png'}`;
      GetImageFromS3('portrait', url, setImageSrc);
    }
  }, [])

  return (
    <div>

      {/* headline */}
      <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between items-start pt-16 px-6 lg:px-12 lg:mt-12 lg:mt-6 text-gray-600 dark:text-gray-300">
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
      {imageSrcMap.portrait
        ? <img src={imageSrcMap.portrait} alt="Speed Run Ethereum logo" className="mx-auto w-96" style={{ flex: 1 }} />
        : <div className="flex justify-center items-center mx-auto h-[450px] w-96 bg-gray-200 text-gray-400 rounded-md animate-pulse">Portrait loading</div>
      }
        {/* 2 */}
        <div className="hidden lg:block text-center text-lg" style={{ flex: 1 }}>
          I love to expand my knowledge of programming and enjoy exploring through building new projects.
        </div>
      </div>

    </div>
  );
}
