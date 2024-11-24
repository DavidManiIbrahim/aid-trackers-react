import styles from '../styles/Beneficiary.module.css';
import aid from "../assets/images/Rectangle 78.png"

const Beneficiary = () => {
  return (
    <div>
        <div className={styles.container} id='beneficiary'>
            <h1>Beneficiary</h1>
            <div className={styles.images}>
                
                <img src={aid} alt="Child receiving aid" className={styles.heroImage2} width={1000} height={300}/>
                
            </div>
            <div className={styles.content}>
                <h2 className={styles.head}>Register as a Beneficiary</h2>
                <p className={styles.text}>Ensuring that aid reaches those who need it the most with blockchain-based humanitarian aid.</p>
                <button className={styles.register}>Connect Wallet</button>
            </div>

       
        </div>

    </div>
  )
}

export default Beneficiary