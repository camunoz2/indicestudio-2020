import React from "react"
import Carousel from "react-elastic-carousel"
import Post from "./post"
import styles from "./post-slider.module.css"

const PostSlider = () => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>otros casos</h3>
            <div className={styles.slider}>
                <Carousel itemsToShow={3}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </Carousel>
            </div>
        </div>
    )
}

export default PostSlider