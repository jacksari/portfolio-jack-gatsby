import React from "react"
import { FaLinkedin, FaEnvelope, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import jack from '../../images/jack.png'
import { socialLinks } from "../../jack/social-links"

function HeaderHome() {
  return (
    <header className="bg-gray-100 section  min-h-screen flex items-center">
      <div className="section-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="w-20 h-1 bg-primary-500"/>
            <h1 className="text-5xl md:text-7xl text-gray-700 font-bold">Hi, I'm <span className="text-primary-500">Jack Sari</span>.</h1>
            <h2 className="my-2 text-2xl md:text-5xl text-gray-700 font-bold">Frontend Developer</h2>
            <p className="text-base md:text-xl text-gray-500 font-semibold">Specialized in Gatsby and React</p>
            <div className="mt-12 mb-16 md:mb-8">
              <button className="w-full md:w-auto md:mr-8 bg-primary-500 rounded-md px-8 py-2 font-medium text-sm md:text-lg text-white letter-1 uppercase hover:bg-primary-600 transition ease-in-out delay-150">
                Contact me
              </button>
              <button className="mt-4 md:mr-0 w-full md:w-auto bg-white rounded-md px-8 py-2 font-medium text-sm md:text-lg text-primary-500 letter-1 uppercase border-2 border-primary-500 hover:border-primary-600 hover:text-primary-600  transition ease-in-out delay-150">
                About me
              </button>
            </div>
            <div className="flex items-center justify-between md:justify-start">
              <a href={socialLinks.linkedin} target="_blank" className="mr-8">
                <FaLinkedin className="text-black hover:primary-500" size="2rem"/>
              </a>
              <a href={socialLinks.correo} target="_blank" className="mr-8">
                <FaEnvelope className="text-black hover:primary-500" size="2rem"/>
              </a>
              <a href={socialLinks.github} target="_blank" className="mr-8">
                <FaGithubSquare className="text-black hover:primary-500" size="2rem"/>
              </a>
              <a href={socialLinks.twitter} target="_blank" className="mr-8">
                <FaTwitterSquare className="text-black hover:primary-500" size="2rem"/>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img className="image-jack" src={jack} alt="Jack Sari" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHome
