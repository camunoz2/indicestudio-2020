import React from "react"
import "./layout.module.css"
import containerStyles from "./container.module.css"
import "fontsource-bebas-neue"
import "fontsource-playfair-display"
import "fontsource-playfair-display/900-normal.css"

const Layout = ({children}) => {

  return (
  <div className={containerStyles.container}>
    <main>{children}</main>
    <footer style={{
      marginTop: `2rem`
    }}>
      Indicestudio © {new Date().getFullYear()}
    </footer>
  </div>
  )
}

export default Layout
