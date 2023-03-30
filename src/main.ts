import Vue from 'vue'
// import * as te from 'tw-elements';
import App from './App.vue'
import router from './router'

import './index.css';
import store from './store'
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
