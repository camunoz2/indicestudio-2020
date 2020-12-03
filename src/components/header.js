import React from "react"
import {motion} from "framer-motion"

import variables from "../theme/variables.module.css"
import styles from "../components/header.module.css"
import imgLanding01 from "../images/landing01.png"
import imgLanding02 from "../images/landing02.png"
// import SvgLine from "../components/icons/svg_line"
import Button from "../components/button"
import IndiceLogo from './icons/indice_logo'

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={`${styles.indiceLogo} ${styles.relative}`}>
                <motion.div animate={{scale:[0, 1, 2, 1]}} transition={{duration:0.4}} className={styles.indiceIcon}>
                    <IndiceLogo />
                </motion.div>
                <motion.h1 animate={{scale:[0, 1]}} transition={{duration:0.4}} className={`${variables.fontDisplay} ${variables.indiceBlue}`}>Indicestudio</motion.h1>
            </div>
            {/* <div className={styles.line}>
                <SvgLine/>
            </div> */}
            <img className={styles.landingImgBottom} src={imgLanding02} alt="mano sosteniendo un velular hacia arriba sacando una foto" />
            <img className={styles.landingImgTop} src={imgLanding01} alt="indicestudio celular en mano al reves" />

            <p className={styles.headerText}>
            Comienza a ver los beneficios inmediatos de una buena presencia online.
            </p>
            
            <div className={styles.homeCta}>
                <Button content="contacto"/>
                <Button content="portafolio"/>
            </div>

        </div>
    )
}

export default Header