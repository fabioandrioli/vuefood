import Vue from 'vue'
import Vuex from 'vuex'

import modules_companies from './modules/companies'
import modules_cart from './modules/cart'

import {
    state,
    mutations,
} from './default'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        modules_companies,
        modules_cart,
    },
    state,
    mutations,
})

export default store
