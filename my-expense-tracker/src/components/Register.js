import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/register', { email, phone, password });
      if (response.status === 200) {
        setSuccessMessage('Registered successfully');
        const username = response.data.username; // Replace with actual response data
        setTimeout(() => navigate('/welcome', { state: { username } }), 2000);
      }
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-box">
        <div className="auth-form">
          <h2 className="auth-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-button">Register</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
      <div className="auth-bg"></div>
    </div>
  );
};

export default Register;
