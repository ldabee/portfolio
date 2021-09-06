import React, { FC } from 'react'
import { DocumentDuplicateIcon, SearchIcon, ShareIcon, ViewGridIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { IState } from '../store/reducers';
import { useRouter } from "next/dist/client/router";

const SideOne: FC = () => {
  const router = useRouter();
  const projectsState = useSelector((state: IState) => state.projects);
  return (
    <div className="flex flex-col ml-0 p-2 bg-gray-700">
      <div className="relative " onClick={() => router.push('/portfolio')} >
        <DocumentDuplicateIcon className="buttonNav h-7" />
        <div className="absolute w-4 h-4 rounded-full bg-blue-500 bottom-px right-0 text-center text-gray-300 text-xs leading-4">{projectsState.projects.length}</div>
      </div>
      <SearchIcon className="buttonNav h-7" />
      <ShareIcon className="buttonNav  h-7" />
      <ViewGridIcon className="buttonNav  h-7" />
    </div>
  )
}

export default SideOne
