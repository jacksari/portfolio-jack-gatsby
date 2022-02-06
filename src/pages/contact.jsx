import React from "react"
import Layout from "../components/layout/layout"
import TitleSection from "../components/layout/TitleSection"
import NavFixed from "../components/layout/NavFixed"
import Seo from "../components/layout/seo"

function Contact() {
  return (
    <Layout>
      <Seo page="Contact"/>
      <NavFixed/>
      <section id="technologies" className="section bg-primary-100 text-center">
        <div className="section-center">
          <TitleSection title={'Contact'}/>
          <div className="flex items-center justify-center">
            <form action="https://formspree.io/f/mlezjagg" method="POST" className="w-96 bg-white p-4 md:p-8 rounded-md">
              <div className="flex flex-col items-start mb-2">
                <label className="text-gray-700 font-semibold text-left w-full">Name:
                  <input name="name" className="w-full bg-primary-100 px-4 py-2 rounded mt-2 outline-none" type="text" placeholder="Your name" />
                </label>

              </div>
              <div className="flex flex-col items-start mb-2">
                <label className="text-gray-700 font-semibold text-left w-full">Email:
                  <input type="email" name="_replyto" className="w-full bg-primary-100 px-4 py-2 rounded mt-2 outline-none" placeholder="Your email" /></label>

              </div>
              <div className="flex flex-col items-start mb-2">
                <label className="text-gray-700 font-semibold text-left w-full">Message:
                  <textarea name="message" className="w-full bg-primary-100 px-4 py-2 rounded mt-2 outline-none h-20" placeholder="Your message" /></label>

              </div>
              <div className="flex flex-col items-start mb-2">
                <button type="submit" className="w-full bg-primary-500 rounded-md px-8 py-2 font-m text-lg text-white letter-1 uppercase hover:bg-primary-600 transition ease-in-out delay-150">Submit here</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
