// import React from 'react'
import styles from '../styles/Support.module.css';
import kids from "../assets/images/Frame160.png"
import man from "../assets/images/Frame160(1).png"
import playing from "../assets/images/Frame160(2).png"

const Support = () => {
    const title = 'Help the future leaders of Tomorrow';
  const description = 'Born out of a vision, a single-minded objective that puts service before anything else,Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shopping and logistics scenario. Its meteroric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry';
  return (
    <div>
<div className={styles.container}>
      <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={kids} alt='kids in class' className={styles.img} width={400} height={300}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={man} alt='crippled man sweeping'  className={styles.img} width={400} height={300}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
      </div>
    </div>
    <div className={styles.card}>
    <div className={styles.imgContainer}>
      <img src={playing} alt='kids playing basketball' className={styles.img} width={400} height={300}/>
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Support