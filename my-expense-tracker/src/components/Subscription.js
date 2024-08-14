// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Subscription.css';

// const Subscription = () => {
//   const navigate = useNavigate();

//   const handleSubscription = (plan) => {
//     // Perform subscription logic here
//     if (plan === 'basic') {
//       navigate('/home');
//     }
//     // Add other plan navigation logic if needed
//   };

//   return (
//     <div className="subscription-container">
//       <h2>Subscribe to our Service</h2>
//       <div className="plans-container">
//         <div className="plan-box">
//           <h3>Basic Plan</h3>
//           <p>
//             <strong>$10/month</strong><br />
//             Access to basic features.<br />
//             <span className="price-duration">6 Months: $55 (Save $5)</span><br />
//             <span className="price-duration">12 Months: $100 (Save $20)</span>
//           </p>
//           <button onClick={() => handleSubscription('basic')}>Subscribe</button>
//         </div>
//         <div className="plan-box">
//           <h3>Premium Plan</h3>
//           <p>
//             <strong>$20/month</strong><br />
//             Access to premium features and priority support.<br />
//             <span className="price-duration">6 Months: $110 (Save $10)</span><br />
//             <span className="price-duration">12 Months: $200 (Save $40)</span>
//           </p>
//           <button onClick={() => handleSubscription('premium')}>Subscribe</button>
//         </div>
//         <div className="plan-box">
//           <h3>Pro Plan</h3>
//           <p>
//             <strong>$30/month</strong><br />
//             All features included, plus personal consultation.<br />
//             <span className="price-duration">6 Months: $170 (Save $10)</span><br />
//             <span className="price-duration">12 Months: $300 (Save $60)</span>
//           </p>
//           <button onClick={() => handleSubscription('pro')}>Subscribe</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubscription = (plan) => {
    if (plan === 'basic') {
      navigate('/home');
    }
    // Add other plan navigation logic if needed
  };

  return (
    <div className="subscription-container">
      <h2>Subscribe to our Service</h2>
      <div className="plans-container">
        <div className="plan-box">
          <h3>Basic Plan</h3>
          <p>
            <strong>$10/month</strong><br />
            Access to basic features.<br />
            <span className="price-duration">6 Months: $55 (Save $5)</span><br />
            <span className="price-duration">12 Months: $100 (Save $20)</span>
          </p>
          <button onClick={() => handleSubscription('basic')}>Subscribe</button>
        </div>
        <div className="plan-box">
          <h3>Premium Plan</h3>
          <p>
            <strong>$20/month</strong><br />
            Access to premium features and priority support.<br />
            <span className="price-duration">6 Months: $110 (Save $10)</span><br />
            <span className="price-duration">12 Months: $200 (Save $40)</span>
          </p>
          <button onClick={() => handleSubscription('premium')}>Subscribe</button>
        </div>
        <div className="plan-box">
          <h3>Pro Plan</h3>
          <p>
            <strong>$30/month</strong><br />
            All features included, plus personal consultation.<br />
            <span className="price-duration">6 Months: $170 (Save $10)</span><br />
            <span className="price-duration">12 Months: $300 (Save $60)</span>
          </p>
          <button onClick={() => handleSubscription('pro')}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
