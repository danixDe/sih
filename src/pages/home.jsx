import {useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import alumniData from '../data/alumniData'; 
import styles from './home.module.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlumni = alumniData.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.passoutYear.includes(searchTerm)
  );

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1>Connect with Our Alumni</h1>
        <p>Find and connect with graduates who can guide and mentor you.</p>
        <input 
          type="text" 
          className={styles.searchBar} 
          placeholder="Search Alumni by name, year, or occupation..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.featuredAlumni}>
        <h2>Featured Alumni</h2>
        <div className={styles.cards}>
          {alumniData.slice(0, 3).map((alumni) => (
            <Link style={{textDecoration:'none'}} to={`/profile/${alumni.id}`} key={alumni.id}>
              <Card
                name={alumni.name}
                occupation={alumni.occupation}
                passoutYear={alumni.passoutYear}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.allAlumni}>
        <h2>All Alumni</h2>
        <div className={styles.cards}>
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumni) => (
              <Link style={{textDecoration:'none'}} to={`/profile/${alumni.id}`} key={alumni.id}>
                <Card
                  name={alumni.name}
                  occupation={alumni.occupation}
                  passoutYear={alumni.passoutYear}
                />
              </Link>
            ))
          ) : (
            <p>No alumni found matching your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
