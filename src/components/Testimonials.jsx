// import React from 'react'
import styles from '../styles/Testimonials.module.css';
import romeo from "../assets/images/Ellipse 3 (3).png"
import austin from "../assets/images/Ellipse 3 (2).png"
import liz from "../assets/images/Group 2.png"
import gabriel from "../assets/images/Ellipse 3 (1).png"
import christain from "../assets/images/Ellipse 3.png"




const Testimonials = () => {
  return (
    <div>
<div className={styles.container}>
      <h2 className={styles.head}>What Our Beneficiaries Think</h2> 
      <p className={styles.testimonialText}>
        Without any doubt, I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. 
        One of the best agencies I’ve come across so far. Wouldn’t be hesitant to introduce their work to someone else.
      </p>
      <div className={styles.carousel}>
        <button className={styles.arrowButton}>{"<"}</button>
        
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <img src={romeo} alt="Romeo Stephen" width={100} height={100} className={styles.avatar} />
            <p className={styles.name}>Romeo Stephen</p>
            <p className={styles.position}>Janel Cosmetics</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={styles.testimonial}>
            <img src={austin} alt="Millie Austin" width={100} height={100} className={styles.avatar} />
            <p className={styles.name}>Millie Austin</p>
            <p className={styles.position}>Student</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={`${styles.testimonial} ${styles.activeTestimonial}`}>
            <img src={liz} alt="Elizabeth Steve" width={200} height={200} className={styles.avatar} />
            <p className={`${styles.name} ${styles.activeName}`}>Elizabeth Steve</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={styles.testimonial}>
            <img src={gabriel} alt="Gabriel Audu" width={100} height={100} className={styles.avatar} />
            <p className={styles.name}>Gabriel Audu</p>
            <p className={styles.position}>Student</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={styles.testimonial}>
            <img src={christain} alt="Christian Omsle" width={100} height={100} className={styles.avatar} />
            <p className={styles.name}>Christian Omsle</p>
            <p className={styles.position}>Janel Cosmetics</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <button className={styles.arrowButton}>{">"}</button>
      </div>
    </div>

    </div>
  )
}

export default Testimonials