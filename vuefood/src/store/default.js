export const state = {
    preloader:false,
    textPreoloader:'Carregando...',
}

export const mutations = {
    SET_PRELOADER (state,status){
        state.preloader = status
        state.textPreoloader = 'Carregando...'
    },

    SET_TEXT_PRELOADER (state,text){
        state.textPreoloader = text
    }
}