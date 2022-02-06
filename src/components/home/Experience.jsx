import React, { useState, useEffect } from "react"
import TitleSection from "../layout/TitleSection"
import { experiences } from "../../jack/experiences"
import { FaAngleDoubleRight } from "react-icons/fa";

function Experience() {
  const [exp, setExp] = useState(null)
  useEffect(() => {
    setExp(experiences[0])
  }, [])


  return (
    <section className="section bg-gray-50 text-center">
      <div className="section-center">
        <TitleSection title={'Experience'}/>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {
            exp && <>
              <div className="md:col-span-1 flex justify-around md:justify-start md:flex-col">
                {
                  experiences.map((experience, index) => (
                    <div key={index} className={`border-b-2 md:border-l-4 md:border-b-0 mb-6 ${experience.company == exp.company ? 'border-primary-500' : ''}`}>
                      <button onClick={()=>setExp(experience)} className={`py-1 text-gray-500 text-xl text-left ${experience.company == exp.company ? 'text-primary-500' : ''}`} type="button" >
                        { experience.company }
                      </button>
                    </div>
                  ))
                }
              </div>
              <div className="md:col-span-3 text-left">
                <div className="mx-8">
                  <h3 className="text-gray-700 text-3xl letter-2">{ exp.position }</h3>
                  <div className="flex flex-col items-start w-auto mt-2">
                    <div className="bg-primary-200 px-5 py-2 rounded-md">
                      <p className=" text-primary-800 letter-2 font-bold uppercase">{ exp.company }</p>
                    </div>

                    <p className="w-auto letter-2 text-gray-500 mt-2">{ exp.date }</p>
                  </div>

                  <div className="mt-2">
                    {
                      exp.items.map((it, index) => (
                        <div key={index} className="flex items-center my-2">
                          <FaAngleDoubleRight className="text-primary-500" size="1.5rem"/>
                          <p className="text-gray-700 ml-2">{ it }</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </section>
  )
}

export default Experience
