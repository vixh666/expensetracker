import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Import the CSS file

const UserProfile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dob: '',
    email: '',
    registerNumber: '',
    password: '',
  });
  
  const [message, setMessage] = useState('');
  const [passwordUpdateMessage, setPasswordUpdateMessage] = useState('');

  const generateRandomRegisterNumber = () => {
    return `REG${Math.floor(100000 + Math.random() * 900000)}`; // Generates a random 6-digit number prefixed with 'REG'
  };

  useEffect(() => {
    // Fetch user details from an API or local storage
    const fetchUserDetails = async () => {
      // Replace this with your API call or local storage retrieval
      const userData = {
        firstName: 'Vishnu',
        lastName: 'Priyan',
        phoneNumber: '9677801237',
        dob: '2005-04-13',
        email: 'vishnupriyan@gmail.com',
        registerNumber: generateRandomRegisterNumber(), // Set random register number
      };
      setUser(userData);
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., update user details in the database
    console.log('User details updated:', user);
    
    // Display success message
    setMessage('Profile updated successfully!');
    
    // Clear the message after a few seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Handle password update logic here
    console.log('Password updated:', user.password);
    
    // Display password update message
    setPasswordUpdateMessage('Password updated successfully!');
    
    // Clear the message after a few seconds
    setTimeout(() => setPasswordUpdateMessage(''), 3000);
  };

  return (
    <div className="form-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Register Number:</label>
          <input
            type="text"
            name="registerNumber"
            value={user.registerNumber}
            readOnly
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <form onSubmit={handlePasswordChange} className="password-update-form">
        <button type="submit">Update Password</button>
      </form>
      {message && <div className="message">{message}</div>}
      {passwordUpdateMessage && <div className="message password-update-message">{passwordUpdateMessage}</div>}
    </div>
  );
};

export default UserProfile;
