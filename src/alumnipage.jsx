import Card from './card';
import Header from './header';
import Sidebar from './sidebar';
import styles from './alumni.module.css';

const AlumniPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.cards}>
          <Card name="John snow" occupation="Software Engineer" passoutYear="2020" />
          <Card name="Dany" occupation="Product Manager" passoutYear="2019" />
          <Card name="Jaime" occupation="Data Scientist" passoutYear="2018" />
          <Card name="Arya" occupation="UX Designer" passoutYear="2017" />
          <Card name="Missandei" occupation="Marketing Manager" passoutYear="2016" />
          <Card name="Samwell" occupation="HR Specialist" passoutYear="2015" />
          <Card name="Cersei" occupation="Financial Analyst" passoutYear="2014" />
          <Card name="Margery" occupation="Project Manager" passoutYear="2013" />
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
