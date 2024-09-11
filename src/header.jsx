import styles from './head.module.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className={styles.x}>
            <h1 className={styles.name}>AlumNet</h1>
            <div className={styles.actions}>
                <Link to = '/login'className={styles.postbtn}>Login</Link>
                <div className={styles.postbtn}>Signup</div>
            </div>
        </div>
    );
}
export default Header;
