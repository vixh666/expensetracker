
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <Link to="/home" className="navbar-logo"><i className="fa fa-dollar-sign"></i> Expense Tracker</Link>
//         <div className="navbar-links">
//           <Link to="/home" className="navbar-link"><i className="fa fa-home"></i> Home</Link>
//           <Link to="/login" className="navbar-link"><i className="fa fa-sign-in-alt"></i> Login/Register</Link>
//           <Link to="/profile" className="navbar-link"><i className="fa fa-user"></i> Profile</Link>
//           <Link to="/about" className="navbar-link"><i className="fa fa-info-circle"></i> About</Link>
//           <Link to="/contact" className="navbar-link"><i className="fa fa-envelope"></i> Contact</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear user session, tokens, etc.)
    alert('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo"><i className="fa fa-dollar-sign"></i> Expense Tracker</Link>
        <div className="navbar-links">
          <Link to="/home" className="navbar-link"><i className="fa fa-home"></i> Home</Link>
          <Link to="/login" className="navbar-link"><i className="fa fa-sign-in-alt"></i> Login/Register</Link>
          <Link to="/profile" className="navbar-link"><i className="fa fa-user"></i> Profile</Link>
          <Link to="/about" className="navbar-link"><i className="fa fa-info-circle"></i> About</Link>
          <Link to="/contact" className="navbar-link"><i className="fa fa-envelope"></i> Contact</Link>
          <span className="navbar-link logout-link" onClick={handleLogout}><i className="fa fa-sign-out-alt"></i> Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
