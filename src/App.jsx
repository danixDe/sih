import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home';
import Login from './login';
import Events from './pages/Events';
import Mentorship from './pages/Members';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    <Routes>
    <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
