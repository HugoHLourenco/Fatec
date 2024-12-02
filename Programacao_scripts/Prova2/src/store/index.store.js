import { createStore } from 'vuex';
import products from './modules/products';
import carts from './modules/carts';
import users from './modules/users';
import auth from './modules/auth';

const store = createStore({
  modules: {
    products,
    carts,
    users,
    auth,
  },
});

export default store;
