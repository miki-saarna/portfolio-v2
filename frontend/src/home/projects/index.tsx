import { JSX, useEffect } from 'react'
import { useImages } from '../../state/images';
import { GetImageFromS3 } from '../../utils/index';

export default function Projects(): JSX.Element {

  const { imageSrcMap, setImageSrc } = useImages();

  useEffect(() => {
    if (!imageSrcMap.restaurantReservation) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/projects/${'restaurant-reservation-app.png'}`;
      GetImageFromS3('restaurantReservation', url, setImageSrc);
    }
    if (!imageSrcMap.amazonSellingPartnerAPI) {
      const url = `http://127.0.0.1:5000/get-image-url/${'mikito-saarna-portfolio'}/projects/${'amazon-selling-partner-api.png'}`;
      GetImageFromS3('amazonSellingPartnerAPI', url, setImageSrc);
    }
  }, [])

  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col p-6 lg:px-12">
      <div className="text-left text-3xl font-bold">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

        {/* 1 */}
        <div className="sm:col-span-2 lg:row-span-2 h-min min-h-[16rem] sm:min-h-[20rem] my-auto p-1.5 bg-gray-200 flex justify-center items-center rounded-md overflow-auto shadow-lg">
          {imageSrcMap.restaurantReservation
            ? <img src={imageSrcMap.restaurantReservation} alt="Speed Run Ethereum logo" className="rounded-md" />
            : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse">Project</div>
          }
        </div>

        {/* 2 */}
        <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">
          Project 2
        </div>

        {/* 3 */}
        <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">
          Project 3
        </div>

        {/* <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">Project 4</div> */}
        {/* <div className="bg-gray-200 min-h-[16rem] flex justify-center items-center rounded-md">Project 5</div> */}
        {/* <div className="hidden lg:flex bg-gray-200 min-h-[16rem] justify-center items-center rounded-md">Project 6</div> */}
      </div>
    </div>
  // <div className="min-w-8 mr-6">
  //   {imageSrcMap.speedRunEth
  //     ? <img src={imageSrcMap.speedRunEth} alt="Speed Run Ethereum logo" className="w-8 h-8 rounded-full" />
  //     : <div className="h-8 min-w-8 rounded-full bg-gray-200 animate-pulse" />
  //   }
  // </div>
  )
}