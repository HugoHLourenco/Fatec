import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/auth/login';

export default {
  login(user) {
    return axios.post(API_URL, user);
  },
};
