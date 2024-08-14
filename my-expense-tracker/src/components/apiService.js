import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your Spring Boot base URL

export const getExpenses = () => {
  return axios.get(`${API_BASE_URL}/expenses`);
};

export const addExpense = (expense) => {
  return axios.post(`${API_BASE_URL}/expenses`, expense);
};

export const deleteExpense = (id) => {
  return axios.delete(`${API_BASE_URL}/expenses/${id}`);
};

export const addIncome = (income) => {
  return axios.post(`${API_BASE_URL}/income`, { amount: income });
};
