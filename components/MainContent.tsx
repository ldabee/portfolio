import React, { useState, useEffect, FC } from 'react'
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import Image from "next/image";
import { IProject } from '../models/IProjects';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../store/reducers';
import * as Projects from '../store/action-creators/ProjectsActionCreators';


const MainContent: FC = () => {
  const dispatch = useDispatch();
  const projectsState = useSelector((state: IState) => state.projects);
  const { RemoveProjectToTab, AddProjectToTab } = bindActionCreators(Projects, dispatch);

  const [tabSelected, setTabSelected] = useState<string>();
  const [tabHovered, setTabHovered] = useState<IProject>({} as IProject);

  const [mobileList, setMobileList] = useState<boolean>(false);

  useEffect(() => {
    if (projectsState.projectsTab.length > 0) {
      setTabSelected(projectsState.projectsTab[0].title)
    }
  }, [projectsState.projectsTab])

  const CloseTabs = (tb) => {
    RemoveProjectToTab(tb)
  };

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
                onClick={() => { AddProjectToTab(tab); setMobileList(false); setTabSelected(tab.title) }}
              >
                {tab.title}
              </div>
            ))}</div>
        }
      </div>
      <div className="group flex w-full h-5 mb-3" >
        {projectsState.projectsTab.map((tab, index) => (
          <div
            onClick={() => setTabSelected(tab.title)}
            className={tabSelected == tab.title ? "bg-gray-900 flex justify-evenly h-7 p-3 items-center  w-40" : "bg-gray-700 flex justify-evenly h-7 p-3 items-center  w-40"}
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
            <p className="p-1  text-green-500 text-sm">{tab.title}</p>
            <XIcon
              className={(tabHovered.title === tab.title || tabSelected === tab.title) ? "group-hover:flex h-3 bg-transparent leading-6" : "hidden"}
              onClick={() => CloseTabs(tab.title)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-auto p-5">
        {projectsState.projectsTab.filter((prj) => prj.title === tabSelected).map((p) => (
          <div key={p.id}>
            <div className="relative h-80 w-full mb-5">
              <Image src={p.banner} layout="fill" objectFit="cover" />
            </div>
            <div>
              <div className="flex flex-wrap space-x-2 mb-2">
                {p?.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-600 rounded-full p-2 mr-1 text-xs w-20 text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3>{p.name}</h3>
              <p className="mt-3 mb-5" dangerouslySetInnerHTML={{ __html: p.description }} />
            </div>
            <div className="flex items-start space-x-10 overflow-scroll scrollbar-hide pb-10">
              {p?.screenshots.map((url, index) => (
                <div key={index} className="cursor-pointer hover:scale-105 transform transition dureation-300 ease-out">
                  <div className="relative h-80 w-96 mr-16">
                    <Image src={url} layout="fixed" width={450} height={280} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default MainContent
