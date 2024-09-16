import './pages.css';

const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries or support. We would love to hear from you!</p>
      
      <form className='contact-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' placeholder='Your Name' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' placeholder='Your Email' />
        </div>

        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' placeholder='Your Message' rows='4'></textarea>
        </div>

        <button type='submit' className='submit-btn'>Send Message</button>
      </form>

      <div className='contact-details'>
        <p><strong>Email:</strong> alumni@college.edu</p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>Address:</strong> 123 College Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
