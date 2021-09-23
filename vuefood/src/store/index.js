import Vue from 'vue'
import Vuex from 'vuex'

import modules_companies from './modules/companies'

import {
    state,
    mutations,
} from './default'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        modules_companies
    },
    state,
    mutations,
})

export default store
