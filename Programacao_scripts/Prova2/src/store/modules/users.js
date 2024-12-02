import axios from 'axios';
import { validateUser } from '../../utils/validation';
import { handleError } from '../../utils/errorHandler';

const API_URL = 'https://fakestoreapi.com/users';

const state = {
  users: [],
  user: null,
};

const getters = {
  allUsers: (state) => state.users,
  user: (state) => state.user,
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await axios.get(API_URL);
      commit('setUsers', response.data);
    } catch (error) {
      handleError(error);
    }
  },
  async fetchUser({ commit }, id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      commit('setUser', response.data);
      return response; // Retorne a resposta em caso de sucesso
    } catch (error) {
      handleError(error);
      return null; // Retorne null em caso de erro
    }
  },  
  async addUser({ commit }, user) {
    try {
      validateUser(user);
      const userData = {
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname
        },
        address: {
          geolocation: {
            lat: '',
            long: ''
          },
          city: '',
          street: '',
          number: '',
          zipcode: ''
        },
        phone: user.phone
      };
      const response = await axios.post(API_URL, userData);
      commit('newUser', response.data);
    } catch (error) {
      handleError(error);
    }
  },
  async updateUser({ commit }, user) {
    try {
      validateUser(user);
      const response = await axios.put(`${API_URL}/${user.id}`, user);
      commit('updateUser', response.data);
    } catch (error) {
      handleError(error);
    }
  },
  async deleteUser({ commit }, id) {
    await axios.delete(`${API_URL}/${id}`);
    commit('removeUser', id);
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  setUser: (state, user) => {
    if (user && user.name && user.address) {
      state.user = user;
    } else {
      console.warn('Dados do usuário inválidos:', user);
      state.user = null;
    }
  },  
  newUser: (state, user) => state.users.push(user),
  updateUser: (state, updatedUser) => {
    const index = state.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser);
    }
  },
  removeUser: (state, id) => {
    state.users = state.users.filter(user => user.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
