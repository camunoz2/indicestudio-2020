import React from "react"
import CardLabel from "./card-label"
import styles from "./folio-card.module.css"
import SvgArrow from "./icons/svg_arrow"
import handFolio from "../images/handFolio01.png"

const FolioCard = () => {
    return (
        <div className={styles.card}>
            {/* <div className={styles.cardBorder} /> */}
            <h2 className={styles.clientTitle}>Ronald Tassara - Enero 2020</h2>
            <div className={styles.titleContainer}>
                <h3 className={styles.workTitle}>Ninhue</h3>
                <h3 className={styles.workTitle}>Cultura Viva!</h3>
            </div>
            <div className={styles.labelContainer}>
                <CardLabel labelText="ilustración"/>
                <CardLabel labelText="branding"/>
            </div>
            <p className={styles.textCopy}>
            El city branding es una área poco explorada del diseño, y en este proyecto realizamos unas cuantas ilustraciones para identificar a Ninhue como una localidad turística y cultural, donde la gente disfruta de la cultura  y de la aventura. Su identificación con Arturo Pratt y con su museo y las chupallas elaboradas por los artesanos de la zona, podría ser un nicho turístico a considerar.
            </p>
            <div className={styles.button}>
                <p>Leer caso</p>
                <div style={{width: 15}}>
                    <SvgArrow/>
                </div>
            </div>
            <div className={styles.image}>
                <img src={handFolio} alt="ninhue"/>
            </div>
            <div className={styles.verticalBar} />
        </div>
    )
}

export default FolioCard