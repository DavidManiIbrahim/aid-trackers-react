import { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import logo from "../assets/images/Union.png"
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    
        <header className={styles.header}>
            <div className={styles.logocontainer}>
                <img src={logo} alt="company logo" className={styles.companylogo} width={20} height={20} />
                <h2 className={styles.highlight}>Aid <span className={styles.logo}>Trackers</span></h2>
            </div>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/howitworks">How It Works</Link>
                <Link to="/features">Features</Link>
                <Link to="/beneficiaries">Beneficiaries</Link>
                <Link to="/donors">Donors</Link>
            </nav>
            <button className={styles.contactButton} >Connect Wallet</button>
            
            <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/howitworks">How it Works</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/beneficiaries">Beneficiaries</Link></li>
                <li><Link to="/donors">Donors</Link></li>
                <button className={styles.WalletButton} >Connect Wallet</button>
            </ul>

           
              
            
        </header>

    
  )
}

export default Navbar