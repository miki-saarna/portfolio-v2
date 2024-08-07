import { JSX, useEffect, MouseEvent } from 'react'
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

  // useEffect(() => {
  //   if (!imageSrcMap.restaurantReservation) {
  //     const url = `${process.env.REACT_APP_API_URL}/get-image-url/${'mikito-saarna-portfolio'}/projects/${'restaurant-reservation-app.png'}`;
  //     GetImageFromS3('restaurantReservation', url, setImageSrc);
  //   }
  //   if (!imageSrcMap.votingDapp) {
  //     const url = `${process.env.REACT_APP_API_URL}/get-image-url/${'mikito-saarna-portfolio'}/projects/${'voting-dapp.png'}`;
  //     GetImageFromS3('votingDapp', url, setImageSrc);
  //   }
  //   if (!imageSrcMap.amazonSellingPartnerAPI) {
  //     const url = `${process.env.REACT_APP_API_URL}/get-image-url/${'mikito-saarna-portfolio'}/projects/${'amazon-selling-partner-api.png'}`;
  //     GetImageFromS3('amazonSellingPartnerAPI', url, setImageSrc);
  //   }
  // }, [])

  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto flex flex-col py-16 px-6 lg:px-12">
      <div className="text-left text-3xl font-bold">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

        {/* Project 1 */}
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white dark:bg-transparent dark:border dark:border-[#F9FAFB] overflow-auto rounded-md project-card-shadow">
          <a
            href="https://voting-dapp-ashy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {!imageSrcMap.votingDapp
              ? <img src="S3/projects/voting-dapp.png" alt="Blockchain voting dApp dashboard" className="rounded-md" />
              : <div className="flex justify-center items-center h-40 rounded-md bg-gray-200 dark:bg-transparent text-gray-400 dark:text-gray-300 animate-pulse">Loading</div>
            }
          </a>
          <div className="mt-4 text-xl font-bold">Blockchain Voting dApp</div>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {votingDAppSkills.map((skillMapping, idx) => <Tag key={idx} color={getColorFromSkillType(skillMapping.type)}>{skillMapping.skill}</Tag>)}
          </div>
          <div className="mt-2 text-sm text-text-light dark:text-gray-300">Crafted a Solidity-based blockchain voting dApp with React and Tailwind frontend, enabling secure and transparent voting transactions through Ether.js, leveraging Ethereum technology for decentralization.</div>
          <div className="mt-2 text-sm font-bold">Gist ID for Remix:</div>
          <div className="mb-2 text-sm">44065bd0829da53415ed96732502d3b2</div>
          <div className="mt-2 pt-2 flex gap-2">
            <Button
              link="https://github.com/miki-saarna/blockchain-voting-dapp"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800 dark:bg-gray-700"
              className="flex items-center font-bold"
            >
              <div>View source</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
            <Button
              link="https://voting-dapp-ashy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800 dark:bg-gray-700"
              className="flex items-center font-bold"
            >
              <div>Live demo</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white dark:bg-transparent dark:border dark:border-[#F9FAFB] overflow-auto rounded-md project-card-shadow">
          <a
            href="https://restaurant-reservation-application.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {!imageSrcMap.restaurantReservation
              ? <img src="S3/projects/restaurant-reservation-app.png" alt="Restaurant reservation app dashboard" className="rounded-md" />
              : <div className="flex justify-center items-center h-40 rounded-md bg-gray-200 dark:bg-transparent text-gray-400 dark:text-gray-300 animate-pulse">Loading</div>
            }
          </a>
          <div className="mt-4 text-xl font-bold">Restaurant reservation app</div>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {restaurantReservationSkills.map((skillMapping, idx) => <Tag key={idx} color={getColorFromSkillType(skillMapping.type)}>{skillMapping.skill}</Tag>)}
          </div>
          <div className="my-2 text-sm text-text-light dark:text-gray-300">Comprehensive restaurant reservation app, featuring an intuitive reservation and seating system for staff, built on a robust CRUD architecture with Node.js, PostgreSQL, Express for the back-end, and React for the front-end.</div>
          <div className="mt-auto pt-2 flex gap-2">
            <Button
              link="https://github.com/miki-saarna/restaurant-reservation-application"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800 dark:bg-gray-700"
              className="flex items-center font-bold"
            >
              <div>View source</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
            <Button
              link="https://restaurant-reservation-application.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800 dark:bg-gray-700"
              className="flex items-center font-bold"
            >
              <div>Live demo</div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="min-w-[fit-content] flex flex-col p-4 bg-white dark:bg-transparent dark:border dark:border-[#F9FAFB] overflow-auto rounded-md project-card-shadow">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.preventDefault()}
            className="cursor-default"
          >
            {!imageSrcMap.amazonSellingPartnerAPI
              ? <img src="S3/projects/amazon-selling-partner-api.png" alt="Amazon Selling Partner API project image" className="rounded-md" />
              : <div className="flex justify-center items-center h-40 rounded-md bg-gray-200 dark:bg-transparent text-gray-400 dark:text-gray-300 animate-pulse">Loading</div>
            }
          </a>
          <div className="mt-4 text-xl font-bold">Amazon Seller API</div>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {sellingPartnerAPISkills.map((skillMapping, idx) => <Tag key={idx} color={getColorFromSkillType(skillMapping.type)}>{skillMapping.skill}</Tag>)}
          </div>
          <div className="my-2 text-sm text-text-light dark:text-gray-300">Engineered a comprehensive backend repository for automating Amazon Seller operations using Python and various APIs (Amazon Selling Partner, Gmail, Google Drive), featuring systems for dynamic inventory management, automated commission reporting, and accurate product listing via Excel VBA and AI algorithms.</div>
          <div className="mt-auto flex gap-2">
            <Button
              link="https://github.com/miki-saarna/amazon-seller-api"
              target="_blank"
              rel="noopener noreferrer"
              color="bg-gray-800 dark:bg-gray-700"
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