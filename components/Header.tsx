import React, { FC, useState } from 'react'
import Image from 'next/image';
import { MinusIcon, DuplicateIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Projects from '../store/action-creators/ProjectsActionCreators';
import { IState } from '../store/reducers';

const Header: FC = () => {
  const router = useRouter();
  const [currentTab] = useState<string>(router.route);
  const dispatch = useDispatch();
  const projectsState = useSelector((state: IState) => state.projects)
  const { RemoveProjectToTab } = bindActionCreators(Projects, dispatch);
  return (
    <div className="flex bg-gray-600 w-full text-gray-300 text-sm items-center justify-between">
      <div className="inline-flex">
        <div className="relative h-8 w-5 cursor-pointer my-auto mx-1 mr-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="hidden lg:inline-flex">
          <span className={currentTab === "/" ? "button bg-gray-500" : "button"} onClick={() => { router.push('/'); projectsState.projectsTab.forEach((prj) => RemoveProjectToTab(prj.title)) }}>Accueil</span>
          <span className={currentTab === "/portfolio" ? "button bg-gray-500" : "button"} onClick={() => router.push('/portfolio')}>Portfolio</span>
          <span className={currentTab === "/contact" ? "button bg-gray-500" : "button"} onClick={() => { router.push('/contact'); projectsState.projectsTab.forEach((prj) => RemoveProjectToTab(prj.title)) }}>Contact</span>
        </div>
      </div>

      <div>Portfolio - Mon visual studio</div>

      <div className="flex">
        <MinusIcon className="button h-7" />
        <DuplicateIcon className="button h-7" onClick={() => {
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            document.documentElement.requestFullscreen()
          }
        }} />
        <XIcon className="button hover:bg-red-600 h-7" onClick={() => { router.push('/'); projectsState.projectsTab.forEach((prj) => RemoveProjectToTab(prj.title)) }} />
      </div>


    </div>
  )
}

export default Header
