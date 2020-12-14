import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from "../../components/portfoliopage/header"
import Content from "../../components/portfoliopage/content"
import FolioGallery from "../../components/portfoliopage/folio-gallery"
import PostSlider from "../../components/elements/post-slider"

const PortafolioPage = () => {
    return(
        <Layout>
            <SEO title="Ninhue"/>
            <Header/>
            <Content/>
            <FolioGallery/>
            <PostSlider/>
        </Layout>
    )
}

export default PortafolioPage