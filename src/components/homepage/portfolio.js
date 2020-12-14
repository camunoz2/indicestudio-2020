import React from "react"
import SvgPortfolioText from "../icons/svg_portfolio_text"
import styles from "./portfolio.module.css"
import variables from "../../theme/variables.module.css"
import FolioCard from "../elements/folio-card.js"


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