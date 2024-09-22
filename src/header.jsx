import styles from './head.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header({ toggleSidebar }) {
    return (
        <div className={styles.x}>
            <div className={styles.hamburger} onMouseEnter={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <h1 className={styles.name}>AlumNet</h1>
            <div className={styles.actions}>
                <Link to='/login' className={styles.postbtn}>Login</Link>
                <Link to = '/signup' className={styles.postbtn}>Signup</Link>
            </div>
        </div>
    );
}

export default Header;
