// import React from 'react'
import styles from '../../styles/Partners.module.css';
import bike from "../../assets/images/logo8.png";
import hd from "../../assets/images/hd.png";
import sampath from "../../assets/images/sampath.png";
import ads from "../../assets/images/logo5.png";
import bridge from "../../assets/images/pjc.png";






const Partners = () => {
  return (
    <div>
<section className={styles.partnersSection}>
      <h2 className={styles.title}>
        Meet the Our <span className={styles.highlight}>Partners</span>
      </h2>
      <div className={styles.logoContainer}>
        <img src={hd} alt="hd Cream House" className={styles.logo} />
        <img src={sampath} alt="sapath cream house" className={styles.logo} />
        <img src={bike} alt="Bikes Logo" className={styles.logo} />
        <img src={ads} alt="AdClipse" className={styles.logo}  />
        <img src={bridge} alt="PJC Bridge" className={styles.logo} />
      </div>
    </section>
    </div>
  )
}

export default Partners