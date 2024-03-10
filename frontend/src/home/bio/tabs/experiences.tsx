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
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Corvee</div>
          <div className="mt-1 text-sm">Dates - dates</div>
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
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Corvee</div>
          <div className="mt-1 text-sm">Dates - dates</div>
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
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Simply by Papo</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
    </div>
  )
}