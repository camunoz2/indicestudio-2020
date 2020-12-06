import React from "react"
import SvgPortfolioText from "./icons/svg_portfolio_text"
import styles from "./portfolio.module.css"
import variables from "../theme/variables.module.css"
import FolioCard from "../components/folio-card.js"
import folio1 from "../images/ninhue01.png"
import folio2 from "../images/ruka01.png"
import folio3 from "../images/delicias01.png"
import folio4 from "../images/todoaviso01.png"
import folio5 from "../images/anita01.png"

const Portfolio = () => {
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.subHeader}>
                    <SvgPortfolioText/>
                </div>
                <div className={styles.titleDot}>
                    <h2 className={`${variables.fontDisplay} ${styles.title}`}>Trabajos</h2>

                </div>
            </div>
            <FolioCard/>

        </div>

    )
}

export default  Portfolio