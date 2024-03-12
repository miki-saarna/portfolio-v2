import { JSX, useEffect } from 'react';
import { useImages } from '../../../state/images';
import { GetImageFromS3 } from '../../../utils/index';

export default function Events(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  useEffect(() => {
    if (!imageSrcMap.ethDenver) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/logos/${'ethdenver-logo-tiny.png'}`;
      GetImageFromS3('ethDenver', url, setImageSrc);
    }
    if (!imageSrcMap.codehawks) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/logos/${'codehawks-logo-tiny.png'}`;
      GetImageFromS3('codehawks', url, setImageSrc);
    }
    if (!imageSrcMap.vue) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/logos/${'vue-logo-tiny.png'}`;
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
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">ETHDenver 2024</div>
          <div className="mt-1 text-text-light">Participated in ETHDenver, immersing myself in the latest Ethereum and blockchain innovations, engaging with the community, and gaining insights into decentralized technology trends and developments.</div>
          <div className="mt-2 text-base font-bold">Denver, CO</div>
          <div className="mt-1 text-sm text-text-light">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.codehawks
            ? <img src={imageSrcMap.codehawks} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">Competitive security audit: Soulmates</div>
          <div className="mt-1 text-text-light">Successfully completed a Solidity-based bounty program on Codehawks, applying ethical hacking skills to identify vulnerabilities in a codebase, leading to a rewarded security audit achievement.</div>
          <div className="mt-2 text-base font-bold">Remote</div>
          <div className="mt-1 text-sm text-text-light">Dates - dates</div>
        </div>
      </div>
      <div className="flex pt-6">
        <div className="min-w-8 mr-6">   
          {imageSrcMap.vue
            ? <img src={imageSrcMap.vue} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
          }
        </div>
        <div className="flex flex-col text-left">
          <div className="text-xl font-bold">Vueconf US</div>
          <div className="mt-1 text-text-light">Attended VueConf to deepen my understanding of the Vue.js framework, complemented by a workshop day dedicated to mastering Cypress.io, enhancing my skills in end-to-end testing for Vue applications.</div>
          <div className="mt-2 text-base font-bold">Miami, FL</div>
          <div className="mt-1 text-sm text-text-light">Dates - dates</div>
        </div>
      </div>
    </div>
  )
}