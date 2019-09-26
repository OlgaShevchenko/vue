import Vue from 'vue'
import App from './App.vue'
import hdr from './components/header.vue'
import ftr from './components/footer.vue'
import cont from './components/content.vue'
import success from './components/success.vue'

import './assets/fonts/font.css'
import './assets/css/style.css'
import './assets/css/adaptive.css'

Vue.component('app-header', hdr)
Vue.component('app-footer', ftr)
Vue.component('app-content', cont)
Vue.component('app-success', success)
new Vue({
  el: '#app',
  render: h => h(App)
})
