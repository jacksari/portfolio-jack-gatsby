import React from "react"
import TitleSection from "../layout/TitleSection"
import { services } from "../../jack/services"
import Service from "./Service"

function Index(props) {
  return (
    <section id="services" className="section bg-primary-100 text-center">
      <div className="section-center">
        <TitleSection title={'Services'}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
          {
            services.map((service, index) => (
              <Service key={index} service={service}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Index
