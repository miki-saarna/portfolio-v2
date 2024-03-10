import { JSX, useEffect } from 'react';
import { useImages } from '../../../state/images';
import { GetImageFromS3 } from '../../../utils/index';

export default function Events(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  useEffect(() => {
    if (!imageSrcMap.ethDenver) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/${'ethdenver-logo-tiny.png'}`;
      GetImageFromS3('ethDenver', url, setImageSrc);
    }
    if (!imageSrcMap.codehawks) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/${'codehawks-logo-tiny.png'}`;
      GetImageFromS3('codehawks', url, setImageSrc);
    }
    if (!imageSrcMap.vue) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/${'vue-logo-tiny.png'}`;
      GetImageFromS3('vue', url, setImageSrc);
    }
  }, [])

  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="flex">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.ethDenver
            ? <img src={imageSrcMap.ethDenver} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">ETHDenver 2024</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Denver, CO</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.codehawks
            ? <img src={imageSrcMap.codehawks} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">Competitive security audit: Soulmates</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Remote</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.vue
            ? <img src={imageSrcMap.vue} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
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