import React from "react"
import {Link} from "gatsby"
import {motion} from "framer-motion"
import Indicestudio from "../elements/indicestudio"
import headerImg from "../../images/ninhue_header.png"
import styles from "./header.module.css"

const Header = () => {
    const appearFromBottom = {
        before: {
          opacity: 0,
          y: 300,
          transition: {
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
              delay: 0.9,
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
    }

    const appearFromRight = {
        before: {
            opacity: 0,
            x: 300,
        },
        after: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3
            }
        }
    }
    return(
        <div className={styles.header}>
            <motion.div variants={appearFromRight} initial="before" animate="after">
                <Indicestudio fill="#ffffff"/>
                <motion.h2 variants={appearFromRight} className={styles.subtitle}>Estudio de caso</motion.h2>
            </motion.div>

            <motion.div variants={appearFromRight} initial="before" animate="after" className={styles.back}>
                <Link to="/">
                    <h4 >&lt;Volver</h4>
                </Link>
            </motion.div>

            <motion.img variants={appearFromBottom} initial="before" animate="after" src={headerImg} alt="Imagen de una mano sostenido un celular donde se muestra la figura de Arturo Prat en duotono azul y amarillo" className={styles.image}/>
        </div>
    )
}

export default Header