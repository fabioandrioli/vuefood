require('./bootstrap')
require('./plugins/index') //passar o index é opicional
import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

/**
 * Components globais.
 */

Vue.component('preloader-component',() => import('./components/Preloader'))

new Vue({
  render: h => h(BaseTemplate),
  router,
  store,
}).$mount('#app')

store.dispatch('getMe')
