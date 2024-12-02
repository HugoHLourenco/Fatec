import { createApp } from 'vue';
import App from '../app.vue';
import router from './router/index.router';
import store from './store/index.store';
import "@/styles/bootstrap.css"

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
