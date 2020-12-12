import React from "react"
import { motion } from "framer-motion"

import variables from "../theme/variables.module.css"
import styles from "../components/header.module.css"
import imgLanding01 from "../images/landing01.png"
import imgLanding02 from "../images/landing02.png"
// import SvgLine from "../components/icons/svg_line"
import Button from "../components/button"
import IndiceLogo from './icons/indice_logo'

  
const Header = () => {

    let logoFramer = {
      before: {
        opacity: 0,
      },
      after: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5
        }
      }
    }
    
    const logoItemFramer = {
      before: {
        opacity: 0,
        y: -10
      },
      after: {
        opacity: 1,
        y: 0
      }
    }
    
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
            <motion.div variants={logoFramer} initial="before" animate="after" className={`${styles.indiceLogo} ${styles.relative}`}>
                <motion.div variants={logoItemFramer} className={styles.indiceIcon}>
                    <IndiceLogo />
                </motion.div>
                <motion.h1 variants={logoItemFramer} className={`${variables.fontDisplay} ${variables.indiceBlue}`}>Indicestudio</motion.h1>
            </motion.div>
            {/* <div className={styles.line}>
                <SvgLine/>
            </div> */}
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