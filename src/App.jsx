import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home';
import Login from './login';
import Signup from './SignupPage.jsx';
import Signup from "./SignupPage.jsx"
import Events from './pages/Events';
import Mentorship from './pages/Members';
import About from './pages/About';
import Contact from './pages/Contact';
import DonationForm from './pages/DonationForm.jsx';
import Profile from './pages/Profile';  // Import the Profile page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<DonationForm />} />
          <Route path="/profile/:id" element={<Profile />} /> {/* New dynamic route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
