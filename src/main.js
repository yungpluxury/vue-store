import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import './assets/main.css'

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')
