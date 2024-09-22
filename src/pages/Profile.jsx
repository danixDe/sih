import { useParams } from 'react-router-dom';
import alumniData from '../data/alumniData'; // Import the alumni data from the new file
import styles from './Profile.module.css';

const Profile = () => {
  const { id } = useParams();
  const alumni = alumniData.find(alumni => alumni.id === parseInt(id));

  if (!alumni) {
    return <p>Alumni not found!</p>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img
          className={styles.profileImage}
          src={alumni.imageUrl}
          alt={`${alumni.name}'s profile`}
        />
        <h1 className={styles.profileName}>{alumni.name}</h1>
      </div>
      <div className={styles.profileDetails}>
        <p className={styles.profileBio}>{alumni.bio || 'No bio available.'}</p>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Occupation:</span>
          <span className={styles.detailValue}>{alumni.occupation}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Passout Year:</span>
          <span className={styles.detailValue}>{alumni.passoutYear}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Contact:</span>
          <span className={styles.detailValue}>{alumni.contact || 'Not provided'}</span>
        </div>
      </div>
      <button className={styles.contactButton}>Contact</button>
    </div>
  );
};

export default Profile;
