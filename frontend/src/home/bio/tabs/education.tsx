import { JSX, useEffect } from 'react';
import Tag from '../../../components/tag';
import { useImages } from '../../../state/images';
import { GetImageFromS3 } from '../../../utils/index';

export default function Experiences(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  // useEffect(() => {
  //   if (!imageSrcMap.speedRunEth) {
  //     const url = `${process.env.REACT_APP_API_URL}/get-image-url/${'mikito-saarna-portfolio'}/logos/${'speed-run-eth-logo-tiny.png'}`;
  //     GetImageFromS3('speedRunEth', url, setImageSrc);
  //   }
  //   if (!imageSrcMap.thinkful) {
  //     const url = `${process.env.REACT_APP_API_URL}/get-image-url/${'mikito-saarna-portfolio'}/logos/${'thinkful-logo-tiny.png'}`;
  //     GetImageFromS3('thinkful', url, setImageSrc);
  //   }
  // }, [])

  return (
    <div className="flex flex-col space-y-6 divide-y mt-6 lg:mt-0 lg:ml-12">
      <div className="flex">

        <div className="min-w-8 mr-6">
          {!imageSrcMap.speedRunEth
            ? <img src="S3/logos/speed-run-eth-logo-tiny.png" alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center flex-wrap gap-2 lg:gap-3">
            <div className="text-xl font-bold">Solidity Development</div>
            <Tag color="bg-yellow-400" className="pulsating-tag">In progress</Tag>
          </div>
          
          <div className="mt-1 text-text-light dark:text-gray-300">Engaging in Speed Run Ethereum to master Solidity fundamentals, embracing an immersive educational journey into Ethereum development, and acquiring key skills for building and deploying smart contracts.</div>
          <div className="mt-2 text-base font-bold">Speed Run Ethereum</div>
          <div className="mt-1 text-sm text-text-light dark:text-gray-300">Jan 2024 - present</div>
        </div>
      </div>
      <div className="flex pt-6">

        <div className="min-w-8 mr-6">
          {!imageSrcMap.thinkful
            ? <img src="S3/logos/thinkful-logo-tiny.png" alt="Thinkful logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>

        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">Software Engineering Flex</div>
          <div className="mt-1 text-text-light dark:text-gray-300">Completed a comprehensive software engineering certification prior to the advent of AI-assisted learning, mastering industry-standard technologies and best practices in JavaScript, SQL, HTML/CSS, and related frameworks, while emphasizing test-driven development and adaptive learning.</div>
          <div className="mt-2 text-base font-bold">Thinkful</div>
          <div className="mt-1 text-sm text-text-light dark:text-gray-300">Jul 2021 - Jan 2022</div>
        </div>
      </div>
    </div>
  )
}