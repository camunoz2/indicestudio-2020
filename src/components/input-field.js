import React from "react"
import styles from "./input-field.module.css"

const InputField = ({name}) => {
    return(
    <div className={styles.inputField}>
        <div className={styles.cssInputBorder} />
        <input id="name" className={styles.cssInput} />
    <label className={styles.label}  htmlFor="name" >{name}</label>
    </div>
    )
}

export default InputField