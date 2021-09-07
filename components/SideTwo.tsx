import React, { FC, useState, useEffect } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Image from "next/image";
import { IProject } from '../models/IProjects';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store/reducers';
import { bindActionCreators } from 'redux';
import * as Projects from '../store/action-creators/ProjectsActionCreators';




const SideTwo: FC = () => {

  const dispatch = useDispatch();
  const projectsState = useSelector((state: IState) => state.projects)
  const { GetAllProjects, AddProjectToTab } = bindActionCreators(Projects, dispatch);

  const [selectedProjects, setSelectedProjects] = useState<IProject[]>([]);
  const [showList, setShowList] = useState<boolean>(true);

  useEffect(() => {
    GetAllProjects()
  }, []);


  const toggle = (projet: IProject) => {
    selectedProjects.find((p) => p.id === projet.id) === undefined ?
      setSelectedProjects((previousState) => [...previousState, projet]) :
      setSelectedProjects((previousState) => previousState.filter((pr: IProject) => pr.id !== projet.id))
  }


  return (
    <div className="hidden md:flex bg-gray-800 flex-col w-60 text-gray-300  text-sm">
      <div className="flex justify-between items-center p-2">
        <p className="text-xs pl-2 text-gray-300">EXPLORATEUR</p>
        <p className="leading-6">...</p>
      </div>

      <div
        className="flex items-center"
        onClick={() => setShowList(!showList)}
      >
        {!showList ? <ChevronRightIcon className="m-2 h-3" /> : <ChevronDownIcon className="m-2 h-3" />}
        <p>Liste de mes projets</p>
      </div>
      {showList &&
        <div className="ml-2">
          {projectsState?.projects?.map((prj) => (

            <div className="buttonNavTwo" key={prj.id}>
              <div className="flex justify-start leading-7" onClick={() => toggle(prj)}>
                {selectedProjects.find((pr) => pr.id === prj.id) ?
                  <ChevronDownIcon className="m-2 h-3" /> :
                  <ChevronRightIcon className="m-2 h-3" />}
                <p>{prj.title}</p>
              </div>
              <div className={selectedProjects.find((pr) => pr.id === prj.id) ? 'flex text-green-600 leading-6' : 'hidden'}>
                <div className="flex ">
                  <div className="relative h-6 w-4 ml-7 leading-2">
                    <Image
                      src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="left"
                    />
                  </div>
                  <p className="text-green-300 ml-2 pb-1" onClick={() => AddProjectToTab(prj)}>
                    {prj.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>}
    </div>
  )
}

export default SideTwo;



