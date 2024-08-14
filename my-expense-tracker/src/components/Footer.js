
// import React from 'react';
// import './Footer.css'; // Ensure this file contains the updated CSS


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <h2>Expense Tracker</h2>
//         <p>Keep track of your expenses and manage your budget effectively.</p>
//         <div className="footer-links">
//           <a href="/about"style={{ color: 'white' }}>  <i class="fa-solid fa-address-card"> </i>   About Us</a>
//           <a href="/contact" style={{ color: 'white' }}><i class="fa-solid fa-address-book"></i>Contact Us</a>
//           {/* <a href="/privacy">Privacy Policy</a> */}
//         </div>
       
//         <div className="footer-social">
//         <p><i className="fa-brands fa-twitter"></i> <a href="https://twitter.com/ExpenseTracker" target="_blank" rel="noopener noreferrer"style={{ color: 'white' }}>Twitter </a>
//           <i className="fa-brands fa-facebook"></i>  <a href="https://www.facebook.com/ExpenseTracker" target="_blank" rel="noopener noreferrer"style={{ color: 'white' }}>Facebook</a>
//          <i className="fa-brands fa-instagram"></i>  <a href="https://www.instagram.com/expensetracker" target="_blank" rel="noopener noreferrer"style={{ color: 'white' }}>Instagram</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Expense Tracker</h2>
        <p>Keep track of your expenses and manage your budget effectively.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">
            <i className="fa-solid fa-address-card"></i> About Us
          </a>
          <a href="/contact" className="footer-link">
            <i className="fa-solid fa-address-book"></i> Contact Us
          </a>
        </div>
        <div className="footer-social">
          <p>
            <i className="fa-brands fa-twitter"></i>
            <a href="https://twitter.com/ExpenseTracker" target="_blank" rel="noopener noreferrer" className="footer-link">
              Twitter
            </a>
            <i className="fa-brands fa-facebook"></i>
            <a href="https://www.facebook.com/ExpenseTracker" target="_blank" rel="noopener noreferrer" className="footer-link">
              Facebook
            </a>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/expensetracker" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
