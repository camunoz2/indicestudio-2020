import React from "react"
import styles from "./contact.module.css"
import variables from "../theme/variables.module.css"
import SvgHola from "./icons/svg_hola"
import image from "../images/contact01.png"
import InputField from "./input-field"
import Button from "./button"

const Contact = () => {
    return(
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.subHeader}>
                    <SvgHola/>
                </div>
                <div className={styles.titleDot}>
                    <h2 className={`${variables.fontDisplay} ${styles.title}`}>Conversemos</h2>
                    <svg className={styles.dot} viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5"/>
                    </svg>

                </div>
            </div>
            <img className={styles.landingImgBottom} src={image} alt="mujer feliz con su computador"  />
            <form className={`${styles.form} ${variables.fontBody}`}>
                <InputField name="Tu Nombre" />
                <InputField name="Tu Mail" />
                <Button content="Enviar" />
            </form>
        </div>
    )
}

export default Contact