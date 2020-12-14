import React from "react"
import { motion } from "framer-motion"

import styles from "./header.module.css"
import imgLanding01 from "../../images/landing01.png"
import imgLanding02 from "../../images/landing02.png"
import Button from "../elements/button"
import Indicestudio from "../elements/indicestudio"

  
const Header = () => {
    const letterVariants = {
        before: {
          opacity: 0,
          y: 100,
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
              delay: 0.7,
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
      }
    
      const imageUp = {
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
          y: 180,
          transition: {
              delay: 0.9,
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
      }
    
      let imageDown = {
        before: {
          opacity: 0,
          y: -300,
          transition: {
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: -100,
          transition: {
              delay: 0.9,
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
      }
  

    return(
        <div className={styles.header}>

            <Indicestudio fill="#3300C4" />
            <motion.img variants={imageUp} initial="before" animate="after" className={styles.landingImgBottom} src={imgLanding02} alt="mano sosteniendo un velular hacia arriba sacando una foto" />
            <motion.img variants={imageDown} initial="before" animate="after" className={styles.landingImgTop} src={imgLanding01} alt="indicestudio celular en mano al reves" />
            
            <motion.p
                className={styles.headerText}
                variants={letterVariants}
                initial="before"
                animate="after"
                >
                Comienza a ver los beneficios inmediatos de una buena presencia online.
            </motion.p>
            
            <div className={styles.homeCta}>
                  <Button content="contacto"/>
                  <Button content="portafolio"/>
            </div>

        </div>
    )
}

export default Header