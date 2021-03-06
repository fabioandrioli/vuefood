
import axios from 'axios'
import {API_VERSION} from '@/configs/api'
import {TOKEN_NAME} from '@/configs/api'
export default {
    state:{
        me:{
            name:'',
            email:'',
        },
        authenticated:false,
    },
    mutations:{
       SET_ME(state, me){
            state.me = me

            state.authenticated = true
       },

       SET_AUTHENTICATED(state,status){
            state.authenticated = status
       },

       LOGOUT(state){
            state.me = {
                name:'',
                email:'',
            },

            state.authenticated = false
       }

    },

    actions:{
        register({commit},params){
            return axios.post(`${API_VERSION}/clients/store`,params)
        },

        login({commit, dispatch},params){
            return axios.post(`${API_VERSION}/sanctum/token`,params)
                        .then(response => {
                            const token = response.data.token
                            localStorage.setItem(TOKEN_NAME,token)
                            dispatch('getMe')
                        })
                        
        },

        getMe({commit},){
            const token = localStorage.getItem(TOKEN_NAME)
            if(!token)
                return
            
            return axios.get(`${API_VERSION}/auth/me`,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(response => {
                console.log("mutation getMe")
                console.log(response)
                commit('SET_ME',response.data.data)
            })
            .catch(error => localStorage.removeItem(TOKEN_NAME))
        },

        logout({commit},){
            const token = localStorage.getItem(TOKEN_NAME)
            if(!token)
                return
            
            return axios.post(`${API_VERSION}/auth/logout`,{},{ //primiero paremetro é a url, segundos os parametros post
                                                                //e terceiro são os headers
                headers:{
                    'Authorization': `Bearer ${token}`,
                },
            })
            .then(response => {
                commit('LOGOUT')
                localStorage.removeItem(TOKEN_NAME)
            })
        },
    },

    getters:{

    }
}