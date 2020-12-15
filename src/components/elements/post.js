import React from "react"
import { Link } from "gatsby"
import cardImg from "../../images/post01.png"
import styles from "./post.module.css"

const Post = () => {
    return(
        <div className={styles.card}>
        <div className={styles.cardImg} style={{backgroundImage:`url(${cardImg})`}}/>
        <div className={styles.cardText}>
            <h2>Diseño de interfaces web</h2>
            <p>Trabajamos con una compañia de periódicos que vende avisos clasificados en su rediseño del sitio web.</p>
            
            <div className={styles.cardLink}>
                <Link to="/">ver ahora&gt;</Link>
            </div>
        </div>
    </div>
    )
}

export default Post