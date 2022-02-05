import React from "react"

function Service({service}) {
  console.log(service)
  const { title, description, icon } = service;
  return (
    <article className="bg-white p-12 rounded-lg">
      <h3 className="font-bold letter-2">{ title }</h3>
      <div className="underline underline-services mb-4"/>
      <p className="font-light">{ description }</p>
    </article>
  )
}

export default Service
