import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './WelcomePage.css'; // Import the CSS file for styling

const WelcomePage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const username = location.state?.username || 'User';

  useEffect(() => {
    // Redirect to the homepage after 3 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-page">
      <div className="welcome-message">
        <h1>Welcome to Expense Tracker!</h1>
      </div>
    </div>
  );
};

export default WelcomePage;
