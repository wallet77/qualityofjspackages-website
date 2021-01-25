import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import VueFullPage from 'vue-fullpage.js'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueFullPage)

new Vue({
  render: h => h(App),
}).$mount('#app')
