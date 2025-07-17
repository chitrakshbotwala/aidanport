import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function Timeline() {
  return (
    <div>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
            <SiLeetcode />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Joined ALLEN Career Institute
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2nd, 2023
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            currently studying in 12th grade with integrated school ( and coaching for JEE Mains)
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <HiOutlineDatabase />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Graduated HighSchool
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 22nd, 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Grade 10</p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Started coding</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 17th, 2019
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            I was bored during the covid19 lockdown so found myself a new hobby
          </p>
        </li>
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <BsBuilding />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Born</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 27th, 2007
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Joined the internet users list
          </p>
        </li>
      </ol>
    </div>
  )
}
