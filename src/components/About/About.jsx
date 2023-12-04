import styles from "./About.module.css";
import React from 'react'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img className={styles.imgs} src="../../assets/About/frontend.png" alt="curser icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p >
                            I'm a frontend developer creating optimmized sites. 
                        </p>

                    </div>      
                </li>

                <li className={styles.aboutItem}>
                    <img className={styles.imgs} src="../../assets/About/back1.png" alt="curser icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I'm a Backend developer creating optimmized Back-end Apis. 
                        </p>

                    </div>      
                </li>
               
            </ul>
        </div>
      
    </section>
  )
}

export default About
