import React, { FC } from 'react'
import Image from "next/image";
import { MicrophoneIcon, MailIcon } from '@heroicons/react/outline';

const Footer: FC = () => {
  return (
    <div className="inline-flex justify-between w-full bg-blue-500 text-white fixed bottom-0 text-xs h-8 items-center pl-4 pr-4 font-semibold p-2">
      <div className="flex items-center leading-1 justify-between w-4/5 md:w-2/5">
        <span> Web developer frontend</span>
        <a className="flex" href="mailto:'dabee.lionel@gmail.com'"><MailIcon className="hidden md:flex h-4 w-4" /> Lionel DABEE</a>
        <span className="flex"><MicrophoneIcon className="hidden md:flex h-4 w-4" /> 0478/79.45.00</span>
      </div>
      <div className="flex w-10 justify-between">
        <div className="relative h-4 w-4 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/lioneldabee/', '_blank')}>
          <Image src="/linkedin.png" layout="fill" objectFit="contain" className="text-white" />
        </div>
        <div className="relative h-4 w-4 cursor-pointer" onClick={() => window.open('https://github.com/ldabee', '_blank')}>
          <Image src="/git.png" layout="fill" objectFit="contain" className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Footer
