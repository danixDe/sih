import './events.css';

const Events = () => {
  return (
    <div className='events-container'>
      {/* Hero Section */}
      <div className='events-hero'>
        <h1>Upcoming Alumni Events</h1>
        <p>Stay updated with our exciting upcoming events and activities.</p>
      </div>

      {/* Featured Upcoming Events */}
      <div className='upcoming-events'>
        <h2>Featured Events</h2>
        <div className='events-grid'>
          <div className='event-card'>
            <h3>Alumni Meet & Greet</h3>
            <p>Date: October 15, 2024</p>
            <p>Location: Main Auditorium, College Campus</p>
            <button className='event-btn'>Register Now</button>
          </div>
          <div className='event-card'>
            <h3>Career Guidance Webinar</h3>
            <p>Date: November 1, 2024</p>
            <p>Location: Virtual Event (Zoom)</p>
            <button className='event-btn'>Join Webinar</button>
          </div>
          <div className='event-card'>
            <h3>Annual Alumni Dinner</h3>
            <p>Date: December 5, 2024</p>
            <p>Location: City Hotel Banquet Hall</p>
            <button className='event-btn'>Reserve Seat</button>
          </div>
        </div>
      </div>

      {/* Past Events Section */}
      <div className='past-events'>
        <h2>Past Events</h2>
        <div className='events-grid'>
          <div className='event-card'>
            <h3>Alumni Sports Day</h3>
            <p>Held: August 30, 2024</p>
            <button className='event-btn'>View Highlights</button>
          </div>
          <div className='event-card'>
            <h3>Networking Night</h3>
            <p>Held: July 20, 2024</p>
            <button className='event-btn'>View Photos</button>
          </div>
          <div className='event-card'>
            <h3>Start-up Panel Discussion</h3>
            <p>Held: June 12, 2024</p>
            <button className='event-btn'>Watch Recording</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
