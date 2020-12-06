import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import {useViewportScroll} from "framer-motion"


const IndexPage = () => {

  const {scrollYProgress} = useViewportScroll()

  return (
    <Layout>
      <SEO title="Inicio" />
      <Header/>
      <About scrollY={scrollYProgress}/>
      <Portfolio/>
    </Layout>
  )
  }

export default IndexPage
