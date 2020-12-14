import React, {useEffect} from "react"
import {Link} from "gatsby"
import {useInView} from "react-intersection-observer"
import {motion, useAnimation} from "framer-motion"

import CardLabel from "./card-label"
import styles from "./folio-card.module.css"
import SvgArrow from "../icons/svg_arrow"
import handFolio from "../../images/handfolio01.png"


const FolioCard = () => {

    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("after")
        }
    }, [controls, inView])

    const container = {
        before:{
            opcity: 0
        },
        after: {
            opacity: 1,
            transition: {
                delay: 2,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        before: {
            opacity: 0,
            x: 100
        },
        after: {
            opacity: 1,
            x: 0,
        },
        hover: {
            backgroundColor:"#FFF878",
            cursor:"pointer",
            color:"#000000",
            x: 5
        }
    }

    return (
        <motion.div ref={ref} variants={container} initial="before" animate={controls} className={styles.card}>
            <motion.h2 variants={item} className={styles.clientTitle}>Ronald Tassara - Enero 2020</motion.h2>
            <motion.div variants={item} className={styles.titleContainer}>
                <h3 className={styles.workTitle}>Ninhue</h3>
                <h3 className={styles.workTitle}>Cultura Viva!</h3>
            </motion.div>
            <div className={styles.labelContainer}>
                <CardLabel labelText="ilustración"/>
                <CardLabel labelText="branding"/>
            </div>
            <motion.p variants={item} className={styles.textCopy}>
            El city branding es una área poco explorada del diseño, y en este proyecto realizamos unas cuantas ilustraciones para identificar a Ninhue como una localidad turística y cultural, donde la gente disfruta de la cultura  y de la aventura. Su identificación con Arturo Pratt y con su museo y las chupallas elaboradas por los artesanos de la zona, podría ser un nicho turístico a considerar.
            </motion.p>
            <Link to="/casos/ninhue">
                <motion.div variants={item} whileHover="hover" className={styles.button}>
                    <p>Leer caso</p>
                    <div style={{width: 15}}>
                        <SvgArrow fill="#3300C4" stroke="#fff"/>
                    </div>
                </motion.div>
            
            </Link>
            <motion.div variants={item} className={styles.image}>
                <img src={handFolio} alt="ninhue"/>
            </motion.div>
            <div className={styles.verticalBar} />
        </motion.div>
    )
}

export default FolioCard