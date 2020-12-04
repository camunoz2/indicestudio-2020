import React from "react"
import style from "./button.module.css"
import {motion} from "framer-motion"

const buttonTopFramer = {
    before: {
        y: -77,
        x: -10,
        opacity: 0,
        scale: 0.8
    },
    after: {
        y: -62,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.3,
        }
    }
}

const buttonBoderFramer = {
    before: {
        y: -10,
        x: -20,
        opacity: 0,
        scale: 0.8
    },
    after: {
        y: 0,
        x: -10,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.4,
            damping: 1
        }
    }
}

const Button = ({content}) => {


    return (
        <div className={style.button}>
            <motion.div variants={buttonBoderFramer} initial="before" animate="after" className={style.buttonBorder} >
            </motion.div>
            <motion.div whileHover={{backgroundColor:"#FFF878"}}  variants={buttonTopFramer} initial="before" animate="after" className={style.buttonTop} >
                {content}
            </motion.div>
        </div>
    )
}

export default Button