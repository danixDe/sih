import styles from './card.module.css';

const Card = ({ name, occupation, passoutYear }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.occupation}>{occupation}</p>
        <p className={styles.passoutYear}>Passed out: {passoutYear}</p>
      </div>
    </div>
  );
};

export default Card;
