<template>
    <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
      <div class="container">
        <router-link class="navbar-brand" :to="{name:'home'}">
          <img src="@/assets/imgs/logo-vuefood.png" alt="VueFood" class="logo">
        </router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link  class="nav-link" :to="{name:'cart'}">
                  <i class="fas fa-shopping-cart"></i>({{productsCart.length}})
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="me.name">Olá, {{me.name}}</a>
              <router-link v-else  class="nav-link" :to="{name:'login'}">
                  <i class="fas fa-lock"></i> Entrar
              </router-link>
            </li>
            <li class="nav-item">
              <router-link  v-if="!me.name"   class="nav-link" :to="{name:'register'}">
                  <i class="fas fa-card-user"></i> Registrar-se
              </router-link>
               <a v-else href="#" @click.prevent="logout" class="nav-link" :to="{name:'register'}">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState({
        productsCart: state => state.modules_cart.products,
        me: state => state.modules_auth.me
    })
  },
  methods:{
    ...mapActions([
      'logout'
    ]),
  }
}
</script>