import React from "react";
import styles from "./Hero.module.css";
 
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Niraj Rai</h1>
                <p className={styles.description}>
                    I'm a Mearn Stack Developer with 4 Months of experince.
                    Having relevent knowledge of React, Node, Express and mongoDB.
                </p>
                <a href="nirajraibxr657@gmail.com" className={styles.contentBtn}> Contact me</a>
               

            </div>
            <img src = "../../assets\nav\img1.jpg" alt="My Image" className={styles.heroImg}/>
            {/* <div className={styles.topBlure}/> */}
            {/* <div className={styles.bottomBlure}/> */}
        </section>
    )
}