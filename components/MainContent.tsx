import React, { useState, useEffect, FC } from 'react'
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import Image from "next/image";
import { IProject } from '../models/IProjects';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../store/reducers';
import * as Projects from '../store/action-creators/ProjectsActionCreators';
import Project from './Project';


const MainContent: FC = () => {
  const dispatch = useDispatch();
  const projectsState = useSelector((state: IState) => state.projects);
  const { RemoveProjectToTab, AddProjectToTab, SetProjectSelected } = bindActionCreators(Projects, dispatch);

  const [tabHovered, setTabHovered] = useState<IProject>({} as IProject);

  const [mobileList, setMobileList] = useState<boolean>(false);

  const CloseTabs = (tb) => {
    RemoveProjectToTab(tb)
  };

  useEffect(() => {
    return () => { projectsState.projectsTab.forEach((prj) => RemoveProjectToTab(prj.title)) }
  }, [])

  return (
    <div className="flex flex-col h-full md:h-4/5 bg-gray-900 text-gray-300 border-b border-gray-500 ">
      <div className="relative flex items-center border-b py-3 px-3 md:hidden">
        <MenuIcon className="h-5 w-5 mr-6" onClick={() => setMobileList(!mobileList)} />Select a project
        {
          mobileList &&
          <div className="absolute w-full top-12 left-0 flex flex-col bg-blue-500 font-semibold bg-opacity-55 border-white z-30">
            {projectsState.projects.map((tab, index) => (
              <div
                key={index}
                className="flex flex-grow h-8 items-center justify-center text-white border-b"
                onClick={() => { AddProjectToTab(tab); setMobileList(false); SetProjectSelected(tab) }}
              >
                {tab.name}
              </div>
            ))}</div>
        }
      </div>
      <div className="group flex w-full h-5 mb-3" >
        {projectsState.projectsTab.map((tab, index) => (
          <div
            onClick={() => SetProjectSelected(tab)}
            className={projectsState.projectSelected.title == tab.title ? "bg-gray-900 flex justify-evenly h-7 p-3 items-center  w-40" : "bg-gray-700 flex justify-evenly h-7 p-3 items-center  w-40"}
            key={index}
            onMouseEnter={() => setTabHovered(tab)}
            onMouseLeave={() => setTabHovered({} as IProject)}
          >
            <div className="relative h-6 w-4">
              <Image
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <p className="p-1  text-green-500 text-sm">{window.innerWidth < 750 ? `${tab.name.slice(0, 5)}...` : tab.name}</p>
            <XIcon
              className={(tabHovered.title === tab.title || projectsState.projectSelected.title === tab.title) ? "group-hover:flex h-3 bg-transparent leading-6" : "hidden"}
              onClick={() => CloseTabs(tab.title)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-auto p-5">
        {projectsState.projectsTab.filter((prj) => prj.title === projectsState.projectSelected.title).map((p, index: number) => (
          <Project {...p} key={index} />
        ))}
      </div>


    </div>
  )
}

export default MainContent
