import * as React from "react"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {

  return (
    <>
      <Nav/>

      <main className=" ">{children}</main>

      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
