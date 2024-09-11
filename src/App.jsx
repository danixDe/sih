import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniPage from './alumnipage'
import Login from './login';




function App() {

  return (
    <>
    <Router>
      <Routes location = {location} key = {location.pathname}>
        <Route path = '/' element = {<AlumniPage />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>

    </Router>
    </>

  )
}

export default App
