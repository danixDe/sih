import { Link } from 'react-router-dom';
import styles from './side.module.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <br></br>
      <nav className={styles.nav}>
        <div className={styles.feed}>
          <Link to="/" className={styles.feeda}>Home</Link>
        </div>
        <div className={styles.feed}>
          <Link to="/events" className={styles.feeda}>Upcoming Events</Link>
        </div>
        <div className={styles.feed}>
          <Link to="/mentorship" className={styles.feeda}>Mentorship Program</Link>
        </div>
        <div className={styles.feed}>
          <Link to="/about" className={styles.feeda}>About Us</Link>
        </div>
        <div className={styles.feed}>
          <Link to="/contact" className={styles.feeda}>Contact Us</Link>
        </div>
        <div className = {styles.feed}>
          <Link to="/donation" className = {styles.feeda}>Donation Form</Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
