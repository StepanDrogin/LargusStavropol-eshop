import Vue from 'vue'
import App from './App.vue'
import store from './components/vuex/store'
import router from './components/router/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
