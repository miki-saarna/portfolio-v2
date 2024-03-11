import { JSX, useEffect } from 'react'
import { useImages } from '../../state/images';
import { GetImageFromS3 } from '../../utils/index';
import './projectCard.css'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Button from '../../components/button';
import Tag from '../../components/tag';

type SkillType = 'language' | 'framework' | 'tool'
type TagColor = 'bg-blue-300' | 'bg-green-300' | 'bg-orange-300'

type skillsList = {
  skill: string,
  type: SkillType
}

export default function Projects(): JSX.Element {

  const restaurantReservationSkills: skillsList[] = [
    { skill: 'React', type: 'framework' },
    { skill: 'Express', type: 'framework' },
    { skill: 'PostgreSQL', type: 'framework' },
    { skill: 'Knex', type: 'framework' },
    { skill: 'Jest', type: 'framework' },
    { skill: 'Puppeteer', type: 'framework' },
  ]

  const votingDAppSkills: skillsList[] = [
    { skill: 'Solidity', type: 'language' },
    { skill: 'TypeScript', type: 'language' },
    { skill: 'Foundry', type: 'framework' }
  ]
  const sellingPartnerAPISkills: skillsList[] = [
    { skill: 'Python', type: 'language' },
    { skill: 'Amazon Selling Partner API', type: 'framework' },
    { skill: 'gspread API', type: 'framework' }
  ]

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

  function getColorFromSkillType(skillType: SkillType): TagColor {
    if (skillType === 'language') {
      return 'bg-blue-300'
    } else if (skillType === 'framework') {
      return 'bg-green-300'
    } else {
      return 'bg-orange-300'
    }
  }

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
            <img src={imageSrcMap.restaurantReservation} alt="Speed Run Ethereum logo" className="rounded-md" />
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
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white overflow-auto rounded-md shadow-test">
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
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white overflow-auto rounded-md shadow-test">
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