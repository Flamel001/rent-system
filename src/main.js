import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
Vue.use(Vuetify);

Vue.use(axios)
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  let config = {
    headers:{
      'token': Vue.localStorage.get('token')
    }
  }
  axios.get(store.state.url + 'users',config)
      .then((resp)=>{
        store.state.user = resp.data
      })
  next()
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
