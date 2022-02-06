import React from "react"
import { FaSearch, FaBars } from "react-icons/fa";
import { colors } from "../../styles/colors"
import logo from "../../images/logo3.png";
import { Link } from "gatsby"


function Nav() {
  return (
    <nav className="bg-gray-500 w-full border-b-2 border-gray-200">
      <div className=" section-center px-2 md:px-0 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-8 w-8 object-cover" src={logo} alt=""/>
            <p className="ml-1 text-gray-500 font-medium" >Jack <span>Sari</span></p>
        </Link>
        <div className="hidden md:flex bg-gray-200 rounded-md py-2 px-3">
          <div className="flex items-center">
            <FaSearch className="text-gray-700" size='1rem'/>
            <input className="bg-transparent ml-2 outline-none text-black" type="text" placeholder="Discover news, articles and more..."/>
          </div>
        </div>
        <div className="hidden md:block">
          <Link  className="font-bold text-gray-600 mx-3" to="/" activeClassName="active-link-nav">Home</Link>
          <Link activeClassName="active-link-nav" className="font-bold text-gray-600 mx-3" to="/projects">Projects</Link>
          <Link activeClassName="active-link-nav" className="font-bold text-gray-600 mx-3" to="/contact">Contact</Link>
          <Link activeClassName="active-link-nav" className="font-bold text-gray-600 mx-3" to="/about">About</Link>
        </div>
        <div className="md:hidden" id="nav-toggle">
          <FaBars className="cursor-pointer" color={colors.primary} size={'2rem'}/>
        </div>
      </div>
    </nav>
  )
}

export default Nav
