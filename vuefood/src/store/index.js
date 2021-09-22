import Vue from 'vue'
import Vuex from 'vuex'

import modules_companies from './modules/companies'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        modules_companies
    }
})

export default store
