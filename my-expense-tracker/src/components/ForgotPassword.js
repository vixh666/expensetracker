import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Implement forgot password logic here
    setMessage('Password updated successfully');
    setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
  };

  return (
    <div className="auth-container">
      {/* <div className="header">Expense Tracker</div> */}
      <div className="auth-form-box">
        <div className="auth-form">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Enter OTP:</label>
            <i className="fa fa-key"></i>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <div>
              <label>New Password:</label>
              <i className="fa fa-lock"></i>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <i className="fa fa-lock"></i>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" style={{ fontWeight: 'bold' }}>Update Password</button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>
      </div>
       <div className="auth-bg">
        
      </div> 
    </div>
  );
};

export default ForgotPassword;
