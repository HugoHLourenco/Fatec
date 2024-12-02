import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/users';

export default {
  getUsers() {
    return axios.get(API_URL);
  },
  getUser(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  addUser(user) {
    return axios.post(API_URL, user);
  },
  updateUser(user) {
    return axios.put(`${API_URL}/${user.id}`, user);
  },
  deleteUser(id) {
    return axios.delete(`${API_URL}/${id}`);
  },
};
