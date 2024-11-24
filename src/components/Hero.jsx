import styles from "../styles/Hero.module.css";
import heroimg from "../assets/images/home.png";

const Hero = () => {
  return (
    
         <section className={styles.mainSection} id='home'>
      <div className={styles.images}>
            
            <img src={heroimg} alt="Mother with child" className={styles.heroImage2} width={1000} height={250}/>
            
      </div>
      <div className={styles.textContent}>
        <h1 id='header'>
          Ensuring <span className={styles.highlight}>Transparency</span> and{" "}
          <span className={styles.highlight}>Efficient</span> Aid Distribution in Nigeria
        </h1>
        <p id='text'>Ensuring that aid reaches those who need it the most with blockchain based humanitarian aid</p>
        <div className={styles.buttons}>
          <button className={styles.getStarted}> <a href='/beneficiary'>Get Started</a> </button>
          <a href="#" className={styles.learnMore}>Learn More →</a>
        </div>
      </div>
    </section>

    
  )
}

export default Hero