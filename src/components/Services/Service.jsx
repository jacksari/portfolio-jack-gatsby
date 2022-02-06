import React from "react"
import { FaCode } from "react-icons/fa";

function Service({service}) {
  console.log(service)
  const { title, description, icon } = service;
  return (
    <article className="flex flex-col items-center bg-white p-12 rounded-lg hover:bg-primary-500 group transition duration-300 ease-in-out">
      <FaCode className="text-gray-700 group-hover:text-white" size="2rem"/>
      <h3 className="text-gray-700 font-bold letter-2 mt-4 group-hover:text-white">{ title }</h3>
      <div className="underline underline-services mb-4 group-hover:bg-white"/>
      <p className="font-light text-gray-700 group-hover:text-white">{ description }</p>
    </article>
  )
}

export default Service
