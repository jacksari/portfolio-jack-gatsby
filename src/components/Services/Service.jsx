import React from "react"
import { FaCode } from "react-icons/fa";

function Service({service}) {
  const { title, description } = service;
  return (
    <article className="flex flex-col items-center bg-white p-6 md:p-12 rounded-lg hover:bg-primary-500 group transition duration-300 ease-in-out">
      <FaCode className="text-gray-700 group-hover:text-white text-2xl md:text-4xl"/>
      <h3 className="text-gray-700 font-bold letter-2 mt-2 md:mt-4 group-hover:text-white text-sm md:text-base">{ title }</h3>
      <div className="underline underline-services mb-2 md:mb-4 group-hover:bg-white"/>
      <p className="font-light text-gray-700 group-hover:text-white text-sm md:text-base">{ description }</p>
    </article>
  )
}

export default Service
