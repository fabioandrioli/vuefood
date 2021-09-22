<template>
    <div>
        <header-component/>
        <div class="container container-body">
          <router-view></router-view>
        </div>
        <footer-component/>
    </div>
</template>

<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './_partials/header.vue'
import FooterComponent from './_partials/footer.vue'
export default {
  components:{
      HeaderComponent,
      FooterComponent,
  }
}
</script>

<style scoped>
    @import url('../assets/css/vuefood.css');
    @import url('../assets/css/reset.css');
</style>