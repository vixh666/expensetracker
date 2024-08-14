import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import PieChart from './components/PieChart'; // Use this if PieChart.js is in a subdirectory


import './App.css';

const App = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/welcome']; // Add '/welcome' to hide Navbar

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/piechart" element={<PieChart />} />
        
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
