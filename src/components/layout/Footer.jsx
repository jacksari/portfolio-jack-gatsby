import React from "react"
import { FaFacebookSquare, FaPaperPlane } from "react-icons/fa"
import { socialLinks } from "../../jack/social-links"
import { Link } from "gatsby"

// TODO arrglar footer
function Footer() {
  return (
    <footer className="z-0 flex flex-col absolute  w-full bg-white">
      <div
        className="py-10 md:py-16 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col w-full md:w-1/5 lg:w-2/5 pr-12 px-10 md:px-4 mb-6 md:mb-0">
          <h3 className="text-gray-900 text-lg font-bold mb-3">Contáctanos</h3>
          <p className="flex items-center mb-3">
            <span className="ml-4 text-gray-900 text-sm font-light">+51 944825449</span>
          </p>
          <p className="flex items-center mb-3">
            <span className="ml-4 text-gray-900 text-sm font-light">janasarii@gmail.com</span>
          </p>
          <div className="flex items-center mt-4">
            <a rel="noreferrer" target="_blank" href={socialLinks.facebook}
               className="mr-6 hover:text-primary-500 hover:bg-opacity-25 p-2 rounded transition duration-500 ease-in-out">
              <FaFacebookSquare size="1.2rem"/>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 px-10 md:px-4 mb-6 md:mb-0">
          <h3 className="text-gray-900 text-lg font-medium mb-3">Descubre</h3>
          <Link to="/" className="text-gray-900 text-sm font-light my-2">
            Religiosos
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 px-10 md:px-4 mb-6 md:mb-0">
          <h3 className="text-gray-900 text-lg font-medium mb-3">Categorías</h3>
          <Link to="/" className="text-gray-900 text-sm font-light my-2">
            Religiosos
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 px-10 md:px-4 mb-6 md:mb-0">
          <h3 className="text-gray-900 text-lg font-medium mb-3">Menú</h3>

        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 px-10 md:px-4">
          <h3 className="text-gray-900 text-lg font-medium mb-3">Suscríbete</h3>
          <p className="text-gray-900 text-sm font-light my-1">Entérate de todos los tips sobre tecnología en
            jacksari.com</p>
          <div className="bg-gray-200  flex justify-between items-center rounded mt-4 w-full">
            <input placeholder="ejemplo@correo.com" type="text"
                   className="outline-none bg-transparent text-primary-500 pl-3 w-full border-none h-9 shadow-none flex-1 pl-2" />
            <div className="btn btn-primary flex justify-center items-center h-9 cursor-pointer">
              <p className=" text-white text-lg px-1">
                <FaPaperPlane className="text-primary-500"/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t  ">
        <div
          className="py-4 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
          <p className="text-gray-900 text-xs md:text-sm font-light text-center px-2 md:px-0">&copy;{ new Date().getFullYear() } Desarrollado por
            JackSari - Todos los derechos reservados.</p>
          <div className="text-center">
            <Link to="/" rel="noreferrer" target="_blank" className="text-gray-900 text-xs md:text-sm font-light my-2 md: mx-2">Contáctanos</Link>
            <Link to="/" rel="noreferrer" target="_blank" className="text-gray-900 text-xs md:text-sm font-light my-2 md:mx-2">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
