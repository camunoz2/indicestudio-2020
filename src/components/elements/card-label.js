import React from "react"
import styles from "./card-label.module.css"

const CardLabel = ({labelText}) => {
    return (
        <div className={styles.label}>
            <p className={styles.text}>{labelText}</p>
        </div>
    )
}

export default CardLabel