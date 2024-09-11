import styles from './side.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.feed}>
        <p className={styles.feeda}>Upcoming Events</p>
      </div>
      <div className={styles.feed}>
        <p className={styles.feeda}>Mentorship Program</p>
      </div>
      <div className={styles.feed}>
        <p className={styles.feeda}>About us</p>
      </div>      <div className={styles.feed}>
        <p className={styles.feeda}>Contact us</p>
      </div>
    </div>
  );
}
export default Sidebar;
