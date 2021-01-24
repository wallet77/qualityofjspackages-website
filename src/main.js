import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.min.css'
import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueFullPage)

new Vue({
  render: h => h(App),
}).$mount('#app')
