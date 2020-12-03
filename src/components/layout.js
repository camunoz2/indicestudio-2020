import React from "react"
import "./layout.module.css"
import "fontsource-bebas-neue"
import "fontsource-playfair-display"

import Container from "../components/container"

const Layout = ({children}) => {

  return (
  <Container>
    <main>{children}</main>
    <footer style={{
      marginTop: `2rem`
    }}>
      Indicestudio © {new Date().getFullYear()}
    </footer>
  </Container>
  )
}

export default Layout
