
// import React, { useState, useEffect } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import PieChart from './PieChart';
// import Footer from './Footer'; // Import the Footer component
// import './Home.css';

// const Home = () => {
//   const [income, setIncome] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [expenseDate, setExpenseDate] = useState('');
//   const [expenseTime, setExpenseTime] = useState('');
//   const [expenseAmount, setExpenseAmount] = useState('');
//   const [expenseMode, setExpenseMode] = useState('');
//   const [expenseType, setExpenseType] = useState('');
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const updateCurrentTime = () => {
//       const now = new Date();
//       setCurrentTime(now.toLocaleTimeString());
//     };

//     const timer = setInterval(updateCurrentTime, 1000);
//     updateCurrentTime();
//     return () => clearInterval(timer);
//   }, []);

//   const handleAddIncome = () => {
//     setIncome(parseInt(income) || 0);
//   };

//   const handleAddExpense = () => {
//     if (expenseDate && expenseTime && expenseAmount && expenseMode && expenseType) {
//       setExpenses([...expenses, { date: expenseDate, time: expenseTime, amount: parseInt(expenseAmount), mode: expenseMode, type: expenseType }]);
//       setExpenseDate('');
//       setExpenseTime('');
//       setExpenseAmount('');
//       setExpenseMode('');
//       setExpenseType('');
//     }
//   };

//   const handleDeleteExpense = (index) => {
//     const newExpenses = expenses.filter((_, i) => i !== index);
//     setExpenses(newExpenses);
//   };

//   const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//   const balance = income - totalExpenses;

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(12);
//     doc.text('Expense Report', 14, 16);

//     doc.autoTable({
//       startY: 25,
//       head: [['Date', 'Time', 'Amount', 'Mode', 'Type']],
//       body: expenses.map(expense => [expense.date, expense.time, expense.amount, expense.mode, expense.type]),
//       didDrawPage: (data) => {
//         doc.text(`Total Expenses: ${totalExpenses}`, 14, data.cursor.y + 10);
//         doc.text(`Balance: ${balance}`, 14, data.cursor.y + 20);
//       }
//     });

//     doc.save('expense-report.pdf');
//   };

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         {/* Input forms and buttons */}
//         <div className="input-box">
//           <div className="form-group">
//             <label htmlFor="income">Income:</label>
//             <input
//               type="number"
//               id="income"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//               className="input-field"
//               placeholder="Enter Your Income"
//             />
//             <button onClick={handleAddIncome} className="button">Add Income</button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseDate">Date:</label>
//             <input
//               type="date"
//               id="expenseDate"
//               value={expenseDate}
//               onChange={(e) => setExpenseDate(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseTime">Time:</label>
//             <input
//               type="time"
//               id="expenseTime"
//               value={expenseTime}
//               onChange={(e) => setExpenseTime(e.target.value)}
//               className="input-field"
//             />
//             <div id="currentTime" className="time-container">
//               Current Time: {currentTime}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseAmount">Amount:</label>
//             <input
//               type="number"
//               id="expenseAmount"
//               value={expenseAmount}
//               onChange={(e) => setExpenseAmount(e.target.value)}
//               className="input-field"
//               placeholder="Enter Amount"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseMode">Payment Method:</label>
//             <select
//               id="expenseMode"
//               value={expenseMode}
//               onChange={(e) => setExpenseMode(e.target.value)}
//               className="input-field"
//             >
//               <option value="">Select Mode</option>
//               <option value="Cash">Cash</option>
//               <option value="CreditCard">Credit Card</option>
//               <option value="DebitCard">Debit Card</option>
//               <option value="BankTransfer">Bank Transfer</option>
//               <option value="UPI">UPI</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseType">Type:</label>
//             <input
//               type="text"
//               id="expenseType"
//               value={expenseType}
//               onChange={(e) => setExpenseType(e.target.value)}
//               className="input-field"
//               placeholder="Enter Type of Expense"
//             />
//           </div>
//           <button onClick={handleAddExpense} className="button">Add Expense</button>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Your Income</th>
//                 <th>{income}</th>
//                 <th></th>
//               </tr>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Amount</th>
//                 <th>Mode</th>
//                 <th>Type</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenses.map((expense, index) => (
//                 <tr key={index}>
//                   <td>{expense.date}</td>
//                   <td>{expense.time}</td>
//                   <td>{expense.amount}</td>
//                   <td>{expense.mode}</td>
//                   <td>{expense.type}</td>
//                   <td>
//                     <button className="delete-btn" onClick={() => handleDeleteExpense(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td>Total Expenses:</td>
//                 <td>{totalExpenses}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Balance:</td>
//                 <td>{balance}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <button onClick={exportPDF} className="button">Export to PDF</button>
//         <PieChart data={expenses} /> {/* Include the PieChart component */}
//       </div>
//       <br></br>
//       <Footer /> {/* Include the Footer component */}
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import PieChart from './PieChart';
// import Footer from './Footer'; // Import the Footer component
// import './Home.css';

// const Home = () => {
//   const [income, setIncome] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [expenseDate, setExpenseDate] = useState('');
//   const [expenseTime, setExpenseTime] = useState('');
//   const [expenseAmount, setExpenseAmount] = useState('');
//   const [expenseMode, setExpenseMode] = useState('');
//   const [expenseType, setExpenseType] = useState('');

//   // Fetch expenses from backend when component loads
//   useEffect(() => {
//     const userId = localStorage.getItem('userId'); // Assuming the userId is stored in localStorage

//     if (userId) {
//       fetch(`http://localhost:8080/api/expenses?userId=${userId}`)
//         .then(response => response.json())
//         .then(data => {
//           setExpenses(data);
//         })
//         .catch(err => {
//           console.error('Error fetching expenses:', err);
//         });
//     }
//   }, []);

//   const handleAddIncome = () => {
//     setIncome(parseInt(income) || 0);
//   };

//   // Add a new expense and send it to the backend
//   const handleAddExpense = () => {
//     if (expenseDate && expenseTime && expenseAmount && expenseMode && expenseType) {
//       const userId = localStorage.getItem('userId'); // Retrieve userId from local storage

//       if (userId) {
//         const newExpense = {
//           date: expenseDate,
//           time: expenseTime,
//           amount: parseInt(expenseAmount),
//           mode: expenseMode,
//           type: expenseType,
//           userId: userId, // Include userId in the expense data
//         };

//         fetch('http://localhost:8080/api/expenses', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newExpense),
//         })
//           .then(response => response.json())
//           .then(data => {
//             setExpenses([...expenses, data]); // Add the new expense to the state
//             setExpenseDate('');
//             setExpenseTime('');
//             setExpenseAmount('');
//             setExpenseMode('');
//             setExpenseType('');
//           })
//           .catch(err => {
//             console.error('Error adding expense:', err);
//           });
//       }
//     }
//   };

//   // Delete an expense and remove it from the backend
//   const handleDeleteExpense = (index, id) => {
//     fetch(`http://localhost:8080/api/expenses/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         setExpenses(expenses.filter((_, i) => i !== index)); // Remove the deleted expense from the state
//       })
//       .catch(err => {
//         console.error('Error deleting expense:', err);
//       });
//   };

//   const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//   const balance = income - totalExpenses;

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(12);
//     doc.text('Expense Report', 14, 16);

//     doc.autoTable({
//       startY: 25,
//       head: [['Date', 'Time', 'Amount', 'Mode', 'Type']],
//       body: expenses.map(expense => [expense.date, expense.time, expense.amount, expense.mode, expense.type]),
//       didDrawPage: (data) => {
//         doc.text(`Total Expenses: ${totalExpenses}`, 14, data.cursor.y + 10);
//         doc.text(`Balance: ${balance}`, 14, data.cursor.y + 20);
//       }
//     });

//     doc.save('expense-report.pdf');
//   };

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         {/* Input forms and buttons */}
//         <div className="input-box">
//           <div className="form-group">
//             <label htmlFor="income">Income:</label>
//             <input
//               type="number"
//               id="income"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//               className="input-field"
//               placeholder="Enter Your Income"
//             />
//             <button onClick={handleAddIncome} className="button">Add Income</button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseDate">Date:</label>
//             <input
//               type="date"
//               id="expenseDate"
//               value={expenseDate}
//               onChange={(e) => setExpenseDate(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseTime">Time:</label>
//             <input
//               type="time"
//               id="expenseTime"
//               value={expenseTime}
//               onChange={(e) => setExpenseTime(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseAmount">Amount:</label>
//             <input
//               type="number"
//               id="expenseAmount"
//               value={expenseAmount}
//               onChange={(e) => setExpenseAmount(e.target.value)}
//               className="input-field"
//               placeholder="Enter Amount"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseMode">Payment Method:</label>
//             <select
//               id="expenseMode"
//               value={expenseMode}
//               onChange={(e) => setExpenseMode(e.target.value)}
//               className="input-field"
//             >
//               <option value="">Select Mode</option>
//               <option value="Cash">Cash</option>
//               <option value="CreditCard">Credit Card</option>
//               <option value="DebitCard">Debit Card</option>
//               <option value="BankTransfer">Bank Transfer</option>
//               <option value="UPI">UPI</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseType">Type:</label>
//             <input
//               type="text"
//               id="expenseType"
//               value={expenseType}
//               onChange={(e) => setExpenseType(e.target.value)}
//               className="input-field"
//               placeholder="Enter Type of Expense"
//             />
//           </div>
//           <button onClick={handleAddExpense} className="button">Add Expense</button>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Your Income</th>
//                 <th>{income}</th>
//                 <th></th>
//               </tr>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Amount</th>
//                 <th>Mode</th>
//                 <th>Type</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenses.map((expense, index) => (
//                 <tr key={index}>
//                   <td>{expense.date}</td>
//                   <td>{expense.time}</td>
//                   <td>{expense.amount}</td>
//                   <td>{expense.mode}</td>
//                   <td>{expense.type}</td>
//                   <td>
//                     <button className="delete-btn" onClick={() => handleDeleteExpense(index, expense.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td>Total Expenses:</td>
//                 <td>{totalExpenses}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Balance:</td>
//                 <td>{balance}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <button onClick={exportPDF} className="button">Export to PDF</button>
//         <PieChart data={expenses} /> {/* Include the PieChart component */}
//       </div>
//       <Footer /> {/* Include the Footer component */}
//     </div>
//   );
// };

// export default Home;




// export default Home;
 
// import React, { useState, useEffect } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import PieChart from './PieChart';
// import Footer from './Footer'; // Import the Footer component
// import apiService from './apiService'; // Import the API service
// import './Home.css';

// const Home = () => {
//   const [income, setIncome] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [expenseDate, setExpenseDate] = useState('');
//   const [expenseTime, setExpenseTime] = useState('');
//   const [expenseAmount, setExpenseAmount] = useState('');
//   const [expenseMode, setExpenseMode] = useState('');
//   const [expenseType, setExpenseType] = useState('');
//   const [userId, setUserId] = useState(''); // Add userId state
//   const [error, setError] = useState(''); // Add error state for debugging

//   useEffect(() => {
//     // Fetch user ID from local storage or authentication context
//     const storedUserId = localStorage.getItem('userId'); // or use context
//     setUserId(storedUserId);

//     // Fetch expenses for the user if userId is available
//     if (storedUserId) {
//       apiService.getExpenses(storedUserId)
//         .then(response => {
//           setExpenses(response.data);
//         })
//         .catch(err => {
//           console.error('Error fetching expenses:', err);
//           setError('Failed to fetch expenses.');
//         });
//     }
//   }, []);

//   const handleAddIncome = () => {
//     setIncome(parseInt(income) || 0);
//   };

//   const handleAddExpense = () => {
//     if (expenseDate && expenseTime && expenseAmount && expenseMode && expenseType && userId) {
//       const newExpense = {
//         date: expenseDate,
//         time: expenseTime,
//         amount: parseInt(expenseAmount),
//         mode: expenseMode,
//         type: expenseType,
//         userId: userId
//       };

//       apiService.addExpense(newExpense)
//         .then(response => {
//           console.log('Expense added successfully:', response.data); // Debugging
//           setExpenses([...expenses, response.data]);
//           setExpenseDate('');
//           setExpenseTime('');
//           setExpenseAmount('');
//           setExpenseMode('');
//           setExpenseType('');
//         })
//         .catch(err => {
//           console.error('Error adding expense:', err);
//           setError('Failed to add expense.');
//         });
//     } else {
//       setError('Please fill in all fields.');
//     }
//   };

//   const handleDeleteExpense = (id) => {
//     apiService.deleteExpense(id)
//       .then(() => {
//         setExpenses(expenses.filter(expense => expense.id !== id));
//       })
//       .catch(err => {
//         console.error('Error deleting expense:', err);
//         setError('Failed to delete expense.');
//       });
//   };

//   const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//   const balance = income - totalExpenses;

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(12);
//     doc.text('Expense Report', 14, 16);

//     doc.autoTable({
//       startY: 25,
//       head: [['Date', 'Time', 'Amount', 'Mode', 'Type']],
//       body: expenses.map(expense => [expense.date, expense.time, expense.amount, expense.mode, expense.type]),
//       didDrawPage: (data) => {
//         doc.text(`Total Expenses: ${totalExpenses}`, 14, data.cursor.y + 10);
//         doc.text(`Balance: ${balance}`, 14, data.cursor.y + 20);
//       }
//     });

//     doc.save('expense-report.pdf');
//   };

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         {/* Display any error messages */}
//         {error && <div className="error-message">{error}</div>}
        
//         {/* Input forms and buttons */}
//         <div className="input-box">
//           <div className="form-group">
//             <label htmlFor="income">Income:</label>
//             <input
//               type="number"
//               id="income"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//               className="input-field"
//               placeholder="Enter Your Income"
//             />
//             <button onClick={handleAddIncome} className="button">Add Income</button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseDate">Date:</label>
//             <input
//               type="date"
//               id="expenseDate"
//               value={expenseDate}
//               onChange={(e) => setExpenseDate(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseTime">Time:</label>
//             <input
//               type="time"
//               id="expenseTime"
//               value={expenseTime}
//               onChange={(e) => setExpenseTime(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseAmount">Amount:</label>
//             <input
//               type="number"
//               id="expenseAmount"
//               value={expenseAmount}
//               onChange={(e) => setExpenseAmount(e.target.value)}
//               className="input-field"
//               placeholder="Enter Amount"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseMode">Payment Method:</label>
//             <select
//               id="expenseMode"
//               value={expenseMode}
//               onChange={(e) => setExpenseMode(e.target.value)}
//               className="input-field"
//             >
//               <option value="">Select Mode</option>
//               <option value="Cash">Cash</option>
//               <option value="CreditCard">Credit Card</option>
//               <option value="DebitCard">Debit Card</option>
//               <option value="BankTransfer">Bank Transfer</option>
//               <option value="UPI">UPI</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseType">Type:</label>
//             <input
//               type="text"
//               id="expenseType"
//               value={expenseType}
//               onChange={(e) => setExpenseType(e.target.value)}
//               className="input-field"
//               placeholder="Enter Type of Expense"
//             />
//           </div>
//           <button onClick={handleAddExpense} className="button">Add Expense</button>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Your Income</th>
//                 <th>{income}</th>
//                 <th></th>
//               </tr>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Amount</th>
//                 <th>Mode</th>
//                 <th>Type</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenses.map((expense) => (
//                 <tr key={expense.id}>
//                   <td>{expense.date}</td>
//                   <td>{expense.time}</td>
//                   <td>{expense.amount}</td>
//                   <td>{expense.mode}</td>
//                   <td>{expense.type}</td>
//                   <td>
//                     <button className="delete-btn" onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td>Total Expenses:</td>
//                 <td>{totalExpenses}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Balance:</td>
//                 <td>{balance}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <button onClick={exportPDF} className="button">Export to PDF</button>
//         <PieChart data={expenses} /> {/* Include the PieChart component */}
//       </div>
//       <Footer /> {/* Include the Footer component */}
//     </div>
//   );
// };

// export default Home;
// Home.js

// Home.js

// import React, { useState, useEffect } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import PieChart from './PieChart';
// import Footer from './Footer'; // Import the Footer component
// import './Home.css';

// const Home = () => {
//   const [income, setIncome] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [expenseDate, setExpenseDate] = useState('');
//   const [expenseTime, setExpenseTime] = useState('');
//   const [expenseAmount, setExpenseAmount] = useState('');
//   const [expenseMode, setExpenseMode] = useState('');
//   const [expenseType, setExpenseType] = useState('');
//   const [userId, setUserId] = useState(''); // Add userId state

//   useEffect(() => {
//     // Fetch user ID from local storage or authentication context
//     const storedUserId = localStorage.getItem('userId'); // or use context
//     setUserId(storedUserId);

//     // Fetch expenses for the user if userId is available
//     if (storedUserId) {
//       fetch(`http://localhost:3306/api/expenses?userId=${storedUserId}`)
//         .then(response => response.json())
//         .then(data => {
//           console.log('Fetched expenses:', data); // Debugging
//           setExpenses(data);
//         })
//         .catch(err => {
//           console.error('Error fetching expenses:', err);
//         });
//     }
//   }, []);

//   const handleAddIncome = () => {
//     setIncome(parseInt(income) || 0);
//   };

//   const handleAddExpense = () => {
//     if (expenseDate && expenseTime && expenseAmount && expenseMode && expenseType && userId) {
//       const newExpense = {
//         date: expenseDate,
//         time: expenseTime,
//         amount: parseInt(expenseAmount),
//         mode: expenseMode,
//         type: expenseType,
//         userId: userId
//       };

//       fetch('http://localhost:3306/api/expenses', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newExpense)
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Expense added successfully:', data); // Debugging
//           setExpenses(prevExpenses => [...prevExpenses, data]);
//           setExpenseDate('');
//           setExpenseTime('');
//           setExpenseAmount('');
//           setExpenseMode('');
//           setExpenseType('');
//         })
//         .catch(err => {
//           console.error('Error adding expense:', err);
//         });
//     }
//   };

//   const handleDeleteExpense = (id) => {
//     fetch(`http://localhost:3306/api/expenses/${id}`, {
//       method: 'DELETE'
//     })
//       .then(() => {
//         setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
//       })
//       .catch(err => {
//         console.error('Error deleting expense:', err);
//       });
//   };

//   const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//   const balance = income - totalExpenses;

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(12);
//     doc.text('Expense Report', 14, 16);

//     doc.autoTable({
//       startY: 25,
//       head: [['Date', 'Time', 'Amount', 'Mode', 'Type']],
//       body: expenses.map(expense => [expense.date, expense.time, expense.amount, expense.mode, expense.type]),
//       didDrawPage: (data) => {
//         doc.text(`Total Expenses: ${totalExpenses}`, 14, data.cursor.y + 10);
//         doc.text(`Balance: ${balance}`, 14, data.cursor.y + 20);
//       }
//     });

//     doc.save('expense-report.pdf');
//   };

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         {/* Input forms and buttons */}
//         <div className="input-box">
//           <div className="form-group">
//             <label htmlFor="income">Income:</label>
//             <input
//               type="number"
//               id="income"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//               className="input-field"
//               placeholder="Enter Your Income"
//             />
//             <button onClick={handleAddIncome} className="button">Add Income</button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseDate">Date:</label>
//             <input
//               type="date"
//               id="expenseDate"
//               value={expenseDate}
//               onChange={(e) => setExpenseDate(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseTime">Time:</label>
//             <input
//               type="time"
//               id="expenseTime"
//               value={expenseTime}
//               onChange={(e) => setExpenseTime(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseAmount">Amount:</label>
//             <input
//               type="number"
//               id="expenseAmount"
//               value={expenseAmount}
//               onChange={(e) => setExpenseAmount(e.target.value)}
//               className="input-field"
//               placeholder="Enter Amount"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseMode">Payment Method:</label>
//             <select
//               id="expenseMode"
//               value={expenseMode}
//               onChange={(e) => setExpenseMode(e.target.value)}
//               className="input-field"
//             >
//               <option value="">Select Mode</option>
//               <option value="Cash">Cash</option>
//               <option value="CreditCard">Credit Card</option>
//               <option value="DebitCard">Debit Card</option>
//               <option value="BankTransfer">Bank Transfer</option>
//               <option value="UPI">UPI</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="expenseType">Type:</label>
//             <input
//               type="text"
//               id="expenseType"
//               value={expenseType}
//               onChange={(e) => setExpenseType(e.target.value)}
//               className="input-field"
//               placeholder="Enter Type of Expense"
//             />
//           </div>
//           <button onClick={handleAddExpense} className="button">Add Expense</button>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Your Income</th>
//                 <th>{income}</th>
//                 <th></th>
//               </tr>
//               <tr>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Amount</th>
//                 <th>Mode</th>
//                 <th>Type</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenses.map((expense) => (
//                 <tr key={expense.id}>
//                   <td>{expense.date}</td>
//                   <td>{expense.time}</td>
//                   <td>{expense.amount}</td>
//                   <td>{expense.mode}</td>
//                   <td>{expense.type}</td>
//                   <td>
//                     <button className="delete-btn" onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td>Total Expenses:</td>
//                 <td>{totalExpenses}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>Balance:</td>
//                 <td>{balance}</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <button onClick={exportPDF} className="button">Export to PDF</button>
//         <PieChart data={expenses} /> {/* Include the PieChart component */}
//       </div>
//       <Footer /> {/* Include the Footer component */}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PieChart from './PieChart';
import Footer from './Footer';
import './Home.css';
import { getExpenses, addExpense, deleteExpense, addIncome } from './apiService';

const Home = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseTime, setExpenseTime] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseMode, setExpenseMode] = useState('');
  const [expenseType, setExpenseType] = useState('');

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddIncome = async () => {
    try {
      await addIncome(parseInt(income) || 0);
    } catch (error) {
      console.error('Error adding income:', error);
    }
  };

  const handleAddExpense = async () => {
    if (expenseDate && expenseTime && expenseAmount && expenseMode && expenseType) {
      const newExpense = {
        date: expenseDate,
        time: expenseTime,
        amount: parseInt(expenseAmount),
        mode: expenseMode,
        type: expenseType
      };

      try {
        await addExpense(newExpense);
        setExpenses([...expenses, newExpense]);
        setExpenseDate('');
        setExpenseTime('');
        setExpenseAmount('');
        setExpenseMode('');
        setExpenseType('');
      } catch (error) {
        console.error('Error adding expense:', error);
      }
    }
  };

  const handleDeleteExpense = async (index, id) => {
    try {
      await deleteExpense(id);
      const newExpenses = expenses.filter((_, i) => i !== index);
      setExpenses(newExpenses);
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = income - totalExpenses;

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Expense Report', 14, 16);

    doc.autoTable({
      startY: 25,
      head: [['Date', 'Time', 'Amount', 'Mode', 'Type']],
      body: expenses.map(expense => [expense.date, expense.time, expense.amount, expense.mode, expense.type]),
      didDrawPage: (data) => {
        doc.text(`Total Expenses: ${totalExpenses}`, 14, data.cursor.y + 10);
        doc.text(`Balance: ${balance}`, 14, data.cursor.y + 20);
      }
    });

    doc.save('expense-report.pdf');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Input forms and buttons */}
        <div className="input-box">
          <div className="form-group">
            <label htmlFor="income">Income:</label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="input-field"
              placeholder="Enter Your Income"
            />
            <button onClick={handleAddIncome} className="button">Add Income</button>
          </div>
          <div className="form-group">
            <label htmlFor="expenseDate">Date:</label>
            <input
              type="date"
              id="expenseDate"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expenseTime">Time:</label>
            <input
              type="time"
              id="expenseTime"
              value={expenseTime}
              onChange={(e) => setExpenseTime(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expenseAmount">Amount:</label>
            <input
              type="number"
              id="expenseAmount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="input-field"
              placeholder="Enter Amount"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expenseMode">Payment Method:</label>
            <select
              id="expenseMode"
              value={expenseMode}
              onChange={(e) => setExpenseMode(e.target.value)}
              className="input-field"
            >
              <option value="">Select Mode</option>
              <option value="Cash">Cash</option>
              <option value="CreditCard">Credit Card</option>
              <option value="DebitCard">Debit Card</option>
              <option value="BankTransfer">Bank Transfer</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="expenseType">Type:</label>
            <input
              type="text"
              id="expenseType"
              value={expenseType}
              onChange={(e) => setExpenseType(e.target.value)}
              className="input-field"
              placeholder="Enter Type of Expense"
            />
          </div>
          <button onClick={handleAddExpense} className="button">Add Expense</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Your Income</th>
                <th>{income}</th>
                <th></th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Mode</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.date}</td>
                  <td>{expense.time}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.mode}</td>
                  <td>{expense.type}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteExpense(index, expense.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Total Expenses:</td>
                <td>{totalExpenses}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Balance:</td>
                <td>{balance}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={exportPDF} className="button">Export to PDF</button>
        <PieChart data={expenses} /> {/* Include the PieChart component */}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
