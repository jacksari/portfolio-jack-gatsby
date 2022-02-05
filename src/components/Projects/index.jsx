import React from "react"
import Project from "./Project"
import TitleSection from "../layout/TitleSection"

function Index({title, projects}) {
  return (
    <section className="section bg-gray-50 text-center">
      <div className="section-center">
        <TitleSection title={title}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {
            projects.map((project, index) => (
              <Project project={project} key={index}/>
            ))
          }
        </div>
        <div className="mt-12">
          <a href="#" className="bg-primary-500 rounded-md px-8 py-3 font-m text-lg text-white letter-1 uppercase hover:bg-primary-600 transition ease-in-out delay-150">More projects</a>
        </div>
      </div>
    </section>
  )
}

export default Index
