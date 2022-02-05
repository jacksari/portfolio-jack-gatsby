import React from "react"

function TitleSection({ title }) {
  return (
    <div className="mb-16">
      <h2 className="text-40 text-gray-700 font-bold uppercase">{ title }</h2>
      <div className="underline"/>
    </div>
  )
}

export default TitleSection
