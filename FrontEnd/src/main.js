import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const token = localStorage.getItem('token');
if (token) {
  // Si le token est présent, mettez à jour l'état isLogged dans le store Vuex
  store.commit('setIsLogged', true);
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')