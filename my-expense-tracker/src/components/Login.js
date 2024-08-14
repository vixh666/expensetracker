import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      if (response.status === 200) {
        const username = response.data.username; // Replace with actual response data
        navigate('/welcome', { state: { username } });
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-box">
        <div className="auth-form">
          <h2 className="auth-title">Login</h2>
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
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
          <div className="register-link">
            Don't have an account? <a href="/register"style={{ color: 'white' }}>Register</a>
          </div>

        </div>
      </div>
      <div className="auth-bg"></div>
    </div>
  );
};

export default Login;
