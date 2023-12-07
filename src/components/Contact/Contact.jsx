import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img className={styles.imgsrc} src='/assets\contact\phone.png' alt='Contact No:' />
                <a href="7481955476" >+91 7481955476</a>
            </li>
            <li className={styles.link}>
                <img className={styles.imgsrc} src='/assets\contact\mail.png' alt='Mail' />
                <a href="nirajraibxr657@gmail.com" >nirajraibxr657@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img className={styles.imgsrc} src='/assets\contact\linkedIn.png' alt='linkedIn' />
                <a href="https://www.linkedin.com/in/niraj-rai-03a5b4181" >linkedin.com/in/niraj-rai-03a5b4181</a>
            </li>
            <li className={styles.link}>
                <img className={styles.imgsrc} src='/assets\contact\cv.png' alt='Resume' />
                <a href="/assets\contact\CV_NirajR.pdf" download>Click to download Resume</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
