import React from "react"
import logo from "../../images/logo3.png";
import { Link } from "gatsby"
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaTimesCircle, FaTwitterSquare } from "react-icons/fa"
import { socialLinks } from "../../jack/social-links"
import scrollTo from 'gatsby-plugin-smoothscroll';

function Sidebar({setToggle, toggle}) {
  //
  return (
    <div className={`fixed w-full left-0 top-0 bg-white min-h-screen z-50 transition duration-150 ease-in-out ${!toggle ? '-translate-x-full': ''}`}>
      <div className="flex-1 p-8 min-h-screen flex flex-col justify-between">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center">
            <img className="h-8 w-8 object-cover" src={logo} alt=""/>
            <p className="ml-1 text-gray-500 font-medium" >Jack <span>Sari</span></p>
          </Link>
          <button onClick={() => setToggle(!toggle)} type="button">
            <FaTimesCircle className="text-primary-500" size="2rem"/>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-start">

          <button className="text-primary-500 font-semibold text-2xl mb-2" onClick={() => {
            scrollTo('#services')
            setToggle(!toggle)
          }}>1. Servicios</button>
          <button className="text-primary-500 font-semibold text-2xl mb-2" onClick={() => {
            scrollTo('#experiences')
            setToggle(!toggle)
          }}>2. Experience</button>
          <button className="text-primary-500 font-semibold text-2xl mb-2" onClick={() => {
            scrollTo('#technologies')
            setToggle(!toggle)
          }}>3. Technologies</button>
          <button className="text-primary-500 font-semibold text-2xl mb-2" onClick={() => {
            scrollTo('#projects')
            setToggle(!toggle)
          }}>4. Projects</button>

        </div>
        <div className="mt-12 flex items-center justify-between md:justify-start">
          <a href={socialLinks.linkedin} rel="noreferrer" target="_blank" className="">
            <FaLinkedin className="text-black hover:text-primary-500 transition duration-150 ease-in-out" size="2rem"/>
          </a>
          <a href={socialLinks.correo} rel="noreferrer" target="_blank" className="">
            <FaEnvelope className="text-black hover:text-primary-500 transition duration-150 ease-in-out" size="2rem"/>
          </a>
          <a href={socialLinks.github} rel="noreferrer" target="_blank" className="">
            <FaGithubSquare className="text-black hover:text-primary-500 transition duration-150 ease-in-out" size="2rem"/>
          </a>
          <a href={socialLinks.twitter} rel="noreferrer" target="_blank" className="">
            <FaTwitterSquare className="text-black hover:text-primary-500 transition duration-150 ease-in-out" size="2rem"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
