import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/homepage/header"
import About from "../components/homepage/about"
import Portfolio from "../components/homepage/portfolio"
import Contact from "../components/homepage/contact"
import {useViewportScroll} from "framer-motion"


const IndexPage = () => {

  const {scrollYProgress} = useViewportScroll()

  return (
    <Layout>
      <SEO title="Inicio" />
      <Header/>
      <About scrollY={scrollYProgress}/>
      <Portfolio/>
      <Contact/>
    </Layout>
  )
  }

export default IndexPage
