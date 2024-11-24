import styles from "../styles/Donors.module.css";
import aid from "../assets/images/image (1).png";
import mom from "../assets/images/image.png";
import look from "../assets/images/image (11).png";

const Donor = () => {
  return (
    <div>
<div className={styles.container} id="donors">
            <h2 className={styles.title}>Donors</h2>
            <div className={styles.images}>
                <img src={aid} alt="Child receiving aid" className={styles.heroImage} width={100} height={200}/>
                <img src={mom} alt="Mother with child" className={styles.heroImage2} width={600} height={250}/>
                <img src={look} alt="Child looking at aid worker" className={styles.heroImage3} width={100} height={200}/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.heading}>Register as a Donor</h3>
                <p className={styles.description}>
                    Ensuring that aid reaches those who need it the most with blockchain-based humanitarian aid.
                </p>
                <button className={styles.registerButton} >Connect Wallet</button>
            </div>

    
        </div>

    </div>
  )
}

export default Donor