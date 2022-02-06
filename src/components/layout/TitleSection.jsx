import React from "react"

function TitleSection({ title }) {
  return (
    <div className="mb-8 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-700 font-bold uppercase">{ title }</h2>
      <div className="underline"/>
    </div>
  )
}

export default TitleSection
