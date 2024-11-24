import styles from '../styles/Footer.module.css';
import facebook from "../assets/images/Group 5.png";
import linkedin from "../assets/images/Group 9.png";
import twitter from "../assets/images/Group 10.png";
import instagram from "../assets/images/Group 11.png";
import logo from "../assets/images/Union.png"
import google from "../assets/images/google-page-speed1.png";



const Footer = () => {
  return (
    
        <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.logocontainer}>
      <img src={logo} alt="company logo" className={styles.companylogo} width={20} height={20}/>
        <h2 className={styles.logo}>Aid <span className={styles.txt}>Tracker</span></h2>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className={styles.badges}>
          <img src={google} alt="Google Play" className={styles.icon} width={200} height={200} />
            
        </div>
      </div>
      <div className={styles.footerSection}>
        <h3>Links</h3>
        <ul className={styles.linksList}>
        <li><a href="/home">Home</a></li>
        <li><a href="/howitworks">How it Works</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/beneficiaries">Beneficiaries</a></li>
        <li><a href="/donors">Donors</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>+23483561921</p>
        <div className={styles.socialIcons}>
          <img src={facebook} alt="Facebook"  width={20} height={20}/>
          <img src={instagram} alt="Instagram" width={20} height={20}/>
          <img src={twitter} alt="Twitter" width={20} height={20}/>
          <img src={linkedin} alt="LinkedIn" width={20} height={20}/>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Copyright by Aid Tracker. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer