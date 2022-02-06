import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

function Project({project}) {
  const { demo, git, image, technologies, title } = project.frontmatter
  // const { allMdx: { nodes:projects } } = data;
  return (
    <article className="shadow bg-white rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer project">
      <div className="relative h-48 bg-green-100">
        <GatsbyImage alt={title} image={getImage(image)} className="h-full w-full object-cover z-0"/>

          <div className="border-6 border-white absolute b-0 left-1/2 bg-primary-100 rounded-full icon-project flex items-center justify-center -translate-y-1/2 -translate-x-1/2">
            <a rel="noreferrer" target="_blank" href={ demo }>
              <FaExternalLinkAlt className="text-primary-500" size="1.5rem"/>
            </a>
          </div>
      </div>
      <div className="p-6 mt-2 flex-1 flex flex-col justify-center">
        <div className="flex-1 flex items-center justify-center">
          <h4 className="text-xl text-gray-700 font-bold		 tracking-widest ">{ title }</h4>
        </div>
        <div className="flex items-center justify-center mt-4 mx-4">
          {
            technologies.map((technology, index) => (
              <p className="mx-2 bg-gray-100 px-2 py-1 font-normal text-gray-700 rounded text-sm" key={index}>{ technology }</p>
            ))
          }
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-primary-100">
        <a rel="noreferrer" target="_blank" href={git}>
          <FaGithub className="text-primary-500" size="1.2rem"/>
        </a>
        <p className="text-primary-500">Source code</p>
        <a rel="noreferrer" target="_blank" className="text-primary-500 font-medium" href={git}>More info</a>
      </div>
    </article>
  )
}

export default Project
