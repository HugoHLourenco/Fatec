import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/Products.vue';
import Overview from '../components/Overview.vue';
import CartDetails from '../components/CartDetails.vue';
import Carts from '../components/Carts.vue';
import Users from '../components/Users.vue';
import Login from '../components/Login.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
  { path: '/', component: Overview },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductDetails },
  { path: '/cart/:id', component: CartDetails },
  { path: '/carts', component: Carts },
  { path: '/users', component: Users },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
