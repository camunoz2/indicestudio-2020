import React from "react"
import styles from "./folio-gallery.module.css"
import img01 from "../../images/ninhue01.png"
import img02 from "../../images/ninhue02.png"
import img03 from "../../images/ninhue03.png"
import img04 from "../../images/ninhue04.png"


const FolioGallery = () => {
    return(
        <div className={styles.container}>
            <img className={styles.imageFolio} src={img01} alt="portfolio 1"/>
            <img className={styles.imageFolio} src={img02} alt="portfolio 2"/>
            <img className={styles.imageFolio} src={img03} alt="portfolio 3"/>
            <img className={styles.imageFolio} src={img04} alt="portfolio 4"/>
        </div>
    )
}

export default FolioGallery