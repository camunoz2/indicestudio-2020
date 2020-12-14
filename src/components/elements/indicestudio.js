import React from "react"
import {Link} from "gatsby"
import {motion} from "framer-motion"

import IndiceLogo from "../icons/indice_logo"
import variables from "../../theme/variables.module.css"
import styles from "./indicestudio.module.css"

const Indicestudio = ({fill}) => {

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

    return(
      <Link to="/" activeStyle={{textDecoration: "none"}} partiallyActive={true}>
        <motion.div variants={logoFramer} initial="before" animate="after" className={`${styles.indiceLogo} ${styles.relative}`}>
          <motion.div variants={logoItemFramer} className={styles.indiceIcon}>
              <IndiceLogo fill={fill} />
          </motion.div>
          <motion.h1 variants={logoItemFramer} className={`${variables.fontDisplay}`} style={{color:`${fill}`, marginBottom:0}}>Indicestudio</motion.h1>
        </motion.div>
      </Link>
    )
}

export default Indicestudio