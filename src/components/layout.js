import React from "react"
import SvgIndiceLogo from "./icons/svg_indice_logo"
import "./layout.module.css"
import containerStyles from "./container.module.css"
import "fontsource-bebas-neue"
import "fontsource-playfair-display"
import "fontsource-playfair-display/900-normal.css"

const Layout = ({children}) => {

  return (
  <div className={containerStyles.container}>
    <main>{children}</main>
    <footer style={{padding:"6rem"}}>
      <div style={{width:250, margin:"0 auto"}}>
        <SvgIndiceLogo/>
      </div>
    </footer>
  </div>
  )
}

export default Layout
