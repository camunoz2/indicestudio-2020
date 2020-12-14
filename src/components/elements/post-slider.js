import React from "react"
import Post from "./post"
import styles from "./post-slider.module.css"

const PostSlider = () => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>otros casos</h3>
            <div className={styles.slider}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default PostSlider