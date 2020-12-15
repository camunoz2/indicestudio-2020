import React from "react"
import Carousel from "react-elastic-carousel"
import Post from "./post"
import styles from "./post-slider.module.css"

const PostSlider = () => {

    const initialValue = [
        {width: 500, itemsToShow: 1},
        {width: 1000, itemsToShow: 2},
        {width: 1200, itemsToShow: 3}
    ]

    return(
        <div className={styles.container}>
            <h3 className={styles.title}>otros casos</h3>
            <div className={styles.slider}>
                <Carousel breakPoints={initialValue} enableAutoPlay autoPlaySpeed={800} itemPadding={[5, 10]}>
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