import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniPage from './alumnipage'
import Login from './login';
import Signup from "./SignupPage.jsx"



function App() {

  return (
    <>
    <Router>
      <Routes location = {location} key = {location.pathname}>
        <Route path = '/' element = {<AlumniPage />} />
        <Route path = '/login' element = {<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>

    </Router>
    </>

  )
}

export default App
