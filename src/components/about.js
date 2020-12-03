import React from "react"
import styles from "./about.module.css"
import variables from "../theme/variables.module.css"
import SvgTitle from "../components/svg_title"
import aboutImg from "../images/about01.png"

const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.aboutHeader}>
                <div className={styles.subHeader}>
                    <SvgTitle/>
                </div>
                <div className={styles.titleDot}>
                    <h2 className={`${variables.fontDisplay} ${styles.title}`}>Declaración</h2>
                    <svg className={styles.dot} viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5"/>
                    </svg>

                </div>
            </div>
            <div className={`${styles.aboutCopy} ${variables.fontBody}`}>
                <p>
                Tenemos super claro que eres un emprendedor, y que necesitas vender y tener más clientes, pero primero te debes hacer esta pregunta ¿Eres feliz con lo que haces? Si la respuesta es sí, entonces llámanos, por que nos encanta trabajar con gente motivada.
                </p>
            </div>
            <img className={styles.landingImgBottom} src={aboutImg} alt="mujer feliz con su computador"  />
        </div>
    )
}

export default About