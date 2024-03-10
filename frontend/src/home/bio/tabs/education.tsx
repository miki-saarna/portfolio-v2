import { JSX, useEffect } from 'react';
import Tag from '../../../components/tag';
import { useImages } from '../../../state/images';
import { GetImageFromS3 } from '../../../utils/index';

export default function Experiences(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  useEffect(() => {
    if (!imageSrcMap.speedRunEth) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/${'speed-run-eth-logo-tiny.png'}`;
      GetImageFromS3('speedRunEth', url, setImageSrc);
    }
  }, [])

  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="flex">

        <div className="min-w-8 mr-6">
          {imageSrcMap.speedRunEth
            ? <img src={imageSrcMap.speedRunEth} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center flex-wrap gap-2 lg:gap-3">
            <div className="text-xl font-bold">Solidity Development</div>
            <Tag color="bg-yellow-400" className="pulsating-tag">In progress</Tag>
          </div>
          
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Speed Run Ethereum</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">

        {/* img */}
        <div className="h-8 min-w-8 rounded-full bg-gray-200"></div>

        <div className="flex flex-col ml-6 text-left">
          <div className="text-xl font-bold">Software Engineering Flex</div>
          <div className="mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat sint aperiam, ipsum nulla molestiae neque cumque non hic voluptates</div>
          <div className="mt-2 text-base font-bold">Thinkful</div>
          <div className="mt-1 text-sm">Dates - dates</div>
        </div>
      </div>
    </div>
  )
}