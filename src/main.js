import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import VueFullPage from 'vue-fullpage.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmileWink, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faGithubAlt, faNpm } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSmileWink)
library.add(faGithubAlt)
library.add(faNpm)
library.add(faQuestionCircle)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

import dayjs from 'dayjs'

Vue.filter('formatDate', function(value) {
  if (value) {
    return dayjs(value).format('DD/MM/YYYY hh:mm')
  }
})

import prettyMilliseconds from 'pretty-ms'
Vue.filter('prettyMS', function(value) {
  if (value) {
    return prettyMilliseconds(value)
  }
})

import filesize from 'filesize'
Vue.filter('filesize', function(value) {
  if (value) {
    return filesize(value, { base: 10 })
  }
})

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueFullPage)

new Vue({
  render: h => h(App),
}).$mount('#app')
