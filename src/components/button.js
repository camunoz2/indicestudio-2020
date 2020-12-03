import React from "react"
import style from "./button.module.css"

const Button = ({content}) => {
    return (
        <div className={style.button}>
            <div className={style.buttonTop} >
                {content}
            </div>
            <div className={style.buttonBorder} >
            </div>
        </div>
    )
}

export default Button