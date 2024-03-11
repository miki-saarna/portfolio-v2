import { JSX, useEffect } from 'react'
import { useImages } from '../../state/images';
import { GetImageFromS3 } from '../../utils/index';
import './projectCard.css'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Button from '../../components/button';
import Tag from '../../components/tag';
import {
  restaurantReservationSkills,
  votingDAppSkills,
  sellingPartnerAPISkills,
  getColorFromSkillType
} from './projectCard'

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
        
        {/* Project 1 */}
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white overflow-auto rounded-md project-card-shadow">
          <a
            href="https://restaurant-reservation-application.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {imageSrcMap.restaurantReservation
              ? <img src={imageSrcMap.restaurantReservation} alt="Speed Run Ethereum logo" className="rounded-md" />
              : <div className="flex justify-center items-center h-40 rounded-md bg-gray-200 text-gray-400 animate-pulse">Loading</div>
            }
          </a>
          <div className="mt-4 text-xl font-bold">Restaurant reservation app</div>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {restaurantReservationSkills.map((skillMapping) => <Tag color={getColorFromSkillType(skillMapping.type)}>{skillMapping.skill}</Tag>)}
          </div>
          <div className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique nemo magnam, atque aliquam delectus, neque, odit eaque blanditiis ut repellat inventore consequatur? Itaque, doloribus.</div>
          <div className="mt-4 flex gap-2">
            <Button
              link="https://github.com/miki-saarna/restaurant-reservation-application"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800"
              className="flex items-center font-bold"
            >
              <div>Live demo</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
            <Button
              link="https://restaurant-reservation-application.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800"
              className="flex items-center font-bold"
            >
              <div>View source</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white overflow-auto rounded-md project-card-shadow">
          <a
            href="https://restaurant-reservation-application.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {imageSrcMap.restaurantReservation
              ? <img src={imageSrcMap.restaurantReservation} alt="Speed Run Ethereum logo" className="rounded-md" />
              : <div className="flex justify-center items-center h-40 rounded-md bg-gray-200 text-gray-400 animate-pulse">Loading</div>
            }
          </a>
          <div className="mt-4 text-xl font-bold">Blockchain Voting dApp</div>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {votingDAppSkills.map((skillMapping) => <Tag color={getColorFromSkillType(skillMapping.type)}>{skillMapping.skill}</Tag>)}
          </div>
          <div className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique nemo magnam, atque aliquam delectus, neque, odit eaque blanditiis ut repellat inventore consequatur? Itaque, doloribus.</div>
          <div className="mt-auto flex gap-2">
            <Button
              link="https://restaurant-reservation-application.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800"
              className="flex items-center font-bold"
            >
              <div>View source</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white overflow-auto rounded-md project-card-shadow">
          <a
            href="https://restaurant-reservation-application.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {imageSrcMap.amazonSellingPartnerAPI
              ? <img src={imageSrcMap.amazonSellingPartnerAPI} alt="Speed Run Ethereum logo" className="rounded-md" />
              : <div className="flex justify-center items-center h-40 rounded-md bg-gray-200 text-gray-400 animate-pulse">Loading</div>
            }
          </a>
          <div className="mt-4 text-xl font-bold">Restaurant reservation app</div>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {sellingPartnerAPISkills.map((skillMapping) => <Tag color={getColorFromSkillType(skillMapping.type)}>{skillMapping.skill}</Tag>)}
          </div>
          <div className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique nemo magnam, atque aliquam delectus, neque, odit eaque blanditiis ut repellat inventore consequatur? Itaque, doloribus.</div>
          <div className="mt-auto flex gap-2">
            <Button
              link="https://restaurant-reservation-application.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800"
              className="flex items-center font-bold"
            >
              <div>View source</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}