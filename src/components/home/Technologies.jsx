import React from "react"
import TitleSection from "../layout/TitleSection"
import { tecnologies } from "../../jack/tecnologies"

function Technologies() {
  return (
    <section id="technologies" className="section bg-primary-100 text-center">
      <div className="section-center">
        <TitleSection title={'Technologies'}/>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 mx-4 md:mx-0">
          {
            tecnologies.map((tec, index) => (
              <div className="bg-white p-4 rounded-lg" key={index}>

                <h4 className="mb-2 font-bold text-gray-700">{ tec.name }</h4>
                <img className="w-full object-contain h-20" src={tec.icon} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Technologies
