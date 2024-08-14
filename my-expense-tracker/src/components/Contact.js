
import React, { useState } from 'react';
import './Contact.css';
import ContactService from './ContactService';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the server
      const response = await ContactService.sendContactForm(formData);
      console.log(response.data); // Optionally handle the response from the server
      setIsSubmitted(true);

      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1><i className="fa fa-envelope"></i> Customer Support:</h1>
        <h1><i className="fa fa-phone"></i> Contact Us</h1>
        <p>
          We value your feedback and are here to assist you with any questions, concerns, or suggestions you may have about our Expense Tracker application. Your input is crucial in helping us improve and provide a better experience for all our users.
        </p>

        <h2>Get in Touch</h2>
        <div className="contact-section">
          <p>
            If you have any questions or need assistance with using the Expense Tracker, please reach out to our customer support team. We are available to help you with troubleshooting, account issues, or general inquiries.
          </p>
          <p><i className="fa fa-envelope"></i> Email: <a href="mailto:support@expensetracker.com">support@expensetracker.com</a></p>
          <p><i className="fa fa-phone"></i> Phone: +91 9876543210</p>
          <p>Operating Hours: Monday to Friday, 9 AM - 6 PM (IST)</p>
        </div>

        <div className="contact-section">
          <h3><i className="fa fa-comments"></i> Feedback and Suggestions:</h3>
          <p>
            We are always looking for ways to enhance our application and your feedback is incredibly valuable. If you have any suggestions on how we can improve our Expense Tracker or if you have ideas for new features, please let us know!
          </p>
          <p><i className="fa fa-envelope"></i> Email: <a href="mailto:feedback@expensetracker.com">feedback@expensetracker.com</a></p>
        </div>

        <div className="contact-section">
          <h3><i className="fa fa-briefcase"></i> Business Inquiries:</h3>
          <p>
            For business partnerships, advertising opportunities, or any other business-related inquiries, please contact us at:
          </p>
          <p><i className="fa fa-envelope"></i> Email: <a href="mailto:business@expensetracker.com">business@expensetracker.com</a></p>
        </div>

        <div className="contact-section">
          <h3><i className="fa fa-share-alt"></i> Follow Us:</h3>
          <p>
            Stay connected and updated with the latest news and updates about the Expense Tracker by following us on social media:
          </p>
          <p><i className="fa-brands fa-twitter"></i> Twitter: <a href="https://twitter.com/ExpenseTracker" target="_blank" rel="noopener noreferrer">@ExpenseTracker</a></p>
          <p><i className="fa-brands fa-facebook"></i> Facebook: <a href="https://www.facebook.com/ExpenseTracker" target="_blank" rel="noopener noreferrer">Expense Tracker</a></p>
          <p><i className="fa-brands fa-instagram"></i> Instagram: <a href="https://www.instagram.com/expensetracker" target="_blank" rel="noopener noreferrer">@expensetracker</a></p>
        </div>

        <div className="contact-section">
          <h3><i className="fa-solid fa-location-dot"></i> Office Address:</h3>
          <p>
            Expense Tracker Inc.<br />
            123 Sri Krishna Lane<br />
            Kovaipudur 400<br />
            Tamilnadu, Cbe 641032<br />
            INDIA
          </p>
        </div>

        <h2><i className="fa fa-phone"></i> Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
        {isSubmitted && <p className="success-message">Message sent successfully!</p>}
      </div>
    </div>
  );
};

export default Contact;
