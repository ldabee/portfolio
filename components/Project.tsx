import React, { FC } from 'react';
import Image from "next/image";
import { IProject } from '../models/IProjects';

const Project: FC<IProject> = ({ ...project }) => {
  return (
    <div>
      <div key={project.id}>
        <div className="relative h-96 w-full mb-5">
          <Image src={project.banner} layout="fill" objectFit="cover" />
        </div>
        <div>
          <div className="flex flex-wrap space-x-2 mb-2">
            {project?.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-600 rounded-full p-2 text-xs flex text-center"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-xl font-semibold my-4">{project.name}</h1>
          <p className="mt-3 mb-5" dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className="flex items-start space-x-10 overflow-scroll scrollbar-hide">
          {project?.screenshots.map((url, index) => (
            <div key={index} className="cursor-pointer hover:scale-105 transform transition dureation-300 ease-out">
              <div className="relative h-80 w-96 mr-16" onClick={() => window.open(project.siteUrl, "_blank")}>
                <Image src={url} layout="fixed" width={450} height={280} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl font-semibold my-4">Code source GitHub : </h1>
          <div className="flex space-x-2 justify-start pb-20">
            <ul>
              {project?.sourceGit.map((url, index: number) => (
                <li
                  className="no-underline hover:underline"
                  key={index}
                >
                  <a href={url} target="_blank">{url}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
