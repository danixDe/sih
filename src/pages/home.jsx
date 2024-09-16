import React, { useState } from 'react';
import Card from '../card';
import styles from './home.module.css';

const alumniData = [
  { name: "John Snow", occupation: "Software Engineer", passoutYear: "2020" },
  { name: "Dany", occupation: "Product Manager", passoutYear: "2019" },
  { name: "Jaime", occupation: "Data Scientist", passoutYear: "2018" },
  { name: "Arya", occupation: "UX Designer", passoutYear: "2017" },
  { name: "Missandei", occupation: "Marketing Manager", passoutYear: "2016" },
  { name: "Samwell", occupation: "HR Specialist", passoutYear: "2015" },
  { name: "Cersei", occupation: "Financial Analyst", passoutYear: "2014" },
  { name: "Margery", occupation: "Project Manager", passoutYear: "2013" },
];

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
      {/* Hero Section */}
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

      {/* Featured Alumni Section */}
      <div className={styles.featuredAlumni}>
        <h2>Featured Alumni</h2>
        <div className={styles.cards}>
          {alumniData.slice(0, 3).map((alumni, index) => (
            <Card
              key={index}
              name={alumni.name}
              occupation={alumni.occupation}
              passoutYear={alumni.passoutYear}
            />
          ))}
        </div>
      </div>

      {/* All Alumni Section */}
      <div className={styles.allAlumni}>
        <h2>All Alumni</h2>
        <div className={styles.cards}>
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumni, index) => (
              <Card
                key={index}
                name={alumni.name}
                occupation={alumni.occupation}
                passoutYear={alumni.passoutYear}
              />
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
