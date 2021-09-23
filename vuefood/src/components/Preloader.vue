<template>
    <div class="preloader" v-if="loading">
        <img src="@/assets/imgs/preloader.gif" alt="Carregando...">
        <p>{{textPreoloader}}</p>
    </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            loading: state => state.preloader,
            textPreoloader: state => state.textPreoloader
        })
    }
}
</script>