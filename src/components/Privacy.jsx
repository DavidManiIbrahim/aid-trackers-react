// import React from 'react'
import styles from '../styles/Privacy.module.css';
import incognito from "../assets/images/Privacy.png"

const Privacy = () => {
  return (
    
<section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.headtext}>Privacy and dignity of beneficiaries are protected</h2>
        <p className={styles.minitext}>
          Finding the right talent is not easy. We help you find the talent that suits your needs,
          follows your processes, and sticks with you long term (not the case with freelancers).
        </p>
        <p className={styles.minitext}>
          Our <a href="/delivery-model" className={styles.link}>delivery model</a> helps you cut costs and deliver within budget.
        </p>
        <blockquote className={styles.quote}>
          &quot;Simform is quick to identify larger problems with the Software so we decided to expand our scope to build new modules&quot;
        </blockquote>
      </div>
      <div className={styles.imageContainer}>
        <img src={incognito} alt="Privacy illustration" width={300} height={300} />
      </div>
    </section>

    
  )
}

export default Privacy