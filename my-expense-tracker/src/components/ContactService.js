import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class ContactService {
  sendContactForm(data) {
    return axios.post(`${API_URL}/contact`, data);
  }
}

export default new ContactService();
