import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './modules/js/script.js';
import './index.css';
import store from './store'
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
