import React, { useState } from 'react';
import styles from './donation.module.css';

const DonationForm = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount}!`);
  };

  return (
    <div className = {styles.donationContainer}>
    <form className={styles.donationForm} onSubmit={handleSubmit}>
      <label htmlFor="amount" className={styles.label}>Enter Donation Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={styles.input}
        placeholder="Enter amount in USD"
        required
      />
      <button type="submit" className={styles.donateButton}>Donate Now</button>
    </form>
</div>
  );
};

export default DonationForm;
