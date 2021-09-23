import axios from 'axios'
import {API_VERSION} from '@/configs/api'

const RESOURCE = 'tenants'
export default {
    getCompanies({commit}){

        commit('SET_PRELOADER',true)
        commit('SET_TEXT_PRELOADER','Carregando Empresas...')
        return axios.get(`${API_VERSION}/${RESOURCE}`)
                    .then(response => {
                        console.log(response)
                        commit('SET_COMPANIES',response.data)
                    })
                    .finally(() => {
                        commit('SET_PRELOADER',false)
                    })
    },

    getCategoriesByCompany({commit},token_company){
        // const params = {token_company: token_company}
        commit('SET_PRELOADER',true)
        commit('SET_TEXT_PRELOADER','Carregando as Categorias...')
        return axios.get(`${API_VERSION}/categories`,{params: {token_company}})
                    .then(response => {
                        console.log("action getCategoryByCompany")
                        console.log(response.data)
                        commit('SET_CATEGORIES_COMPANY',response.data)
                    })
                    .finally(() => {
                        commit('SET_PRELOADER',false)
                    })
       
    },

    getProductsByCompany({commit},params){
        // const params = {token_company: token_company}
        commit('SET_PRELOADER',true)
        commit('SET_TEXT_PRELOADER','Carregando os Produtos...')
        return axios.get(`${API_VERSION}/products`,{params})
                    .then(response => {
                        console.log("action getCategoryByCompany")
                        console.log(response.data)
                        commit('SET_PRODUCTS_COMPANY',response.data)
                    })
                    .finally(() => {
                        commit('SET_PRELOADER',false)
                    })
       
    }
}   
