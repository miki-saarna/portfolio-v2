import { JSX, useEffect } from 'react';
import { useImages } from '../../../state/images';
import { GetImageFromS3 } from '../../../utils/index';

export default function Experiences(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  useEffect(() => {
    if (!imageSrcMap.corvee) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/logos/${'corvee-logo-tiny.png'}`;
      GetImageFromS3('corvee', url, setImageSrc);
    }
    if (!imageSrcMap.simplyByPapo) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/logos/${'papo-logo-tiny.png'}`;
      GetImageFromS3('simplyByPapo', url, setImageSrc);
    }
  }, [])

  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="flex">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.corvee
            ? <img src={imageSrcMap.corvee} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">UI Developer</div>
          <div className="mt-1 text-text-light">Advanced in-house Vue component library to elevate UI consistency and accessibility, contributing to the flagship product's launch and collaborative development, while enhancing backend with Golang for optimal functionality.</div>
          <div className="mt-2 text-base font-bold">Corvee</div>
          <div className="mt-1 text-sm text-text-light">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-8 mr-6">
          {imageSrcMap.corvee
            ? <img src={imageSrcMap.corvee} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">Junior Frontend Engineer</div>
          <div className="mt-1 text-text-light">Led the development of an innovative Vue component library for enhanced UI uniformity and user experience, emphasizing mobile optimization and collaboration through comprehensive documentation and effective Git workflows.</div>
          <div className="mt-2 text-base font-bold">Corvee</div>
          <div className="mt-1 text-sm text-text-light">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.simplyByPapo
            ? <img src={imageSrcMap.simplyByPapo} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">Backend Engineer</div>
          <div className="mt-1 text-text-light">Revolutionized backend operations for an Amazon Seller by automating inventory and sales management, commission reporting, and product listing using Python, APIs, and AI, significantly improving efficiency and accuracy.</div>
          <div className="mt-2 text-base font-bold">Simply by Papo</div>
          <div className="mt-1 text-sm text-text-light">Dates - dates</div>
        </div>
      </div>
    </div>
  )
}