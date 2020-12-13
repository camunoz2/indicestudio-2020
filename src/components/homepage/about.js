import React from "react"
import {motion, useTransform} from "framer-motion"
import styles from "./about.module.css"
import variables from "../../theme/variables.module.css"
import SvgTitle from "../icons/svg_title"
import aboutImg from "../../images/about01.png"

const About = ({scrollY}) => {

    const scaleAnim = useTransform(scrollY, [0, 0.2, 0.3], [50, 40, 1])

    return(
        <div className={styles.section}>
            <div className={styles.header}>
                <motion.div className={styles.subHeader}>
                    <SvgTitle/>
                </motion.div>
                <div className={styles.titleDot}>
                    <h2 className={`${variables.fontDisplay} ${styles.title}`}>Declaración</h2>
                    <motion.svg style={{scale:scaleAnim}} className={styles.dot} viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5"/>
                    </motion.svg>

                </div>
            </div>
            <div className={`${styles.copy} ${variables.fontBody}`}>
                <p>
                Tenemos super claro que eres un emprendedor, y que necesitas vender y tener más clientes, pero primero te debes hacer esta pregunta ¿Eres feliz con lo que haces? Si la respuesta es sí, entonces llámanos, por que nos encanta trabajar con gente motivada.
                </p>
            </div>
            <img className={styles.landingImgBottom} src={aboutImg} alt="mujer feliz con su computador"  />
        </div>
    )
}

export default About