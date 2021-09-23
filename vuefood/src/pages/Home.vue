<template>
    <div class="row">

      <div class="col-lg-12">

        <h1 class="my-4 title-tenant">Restaurantes</h1>

        <div class="row my-4">

          <div class="col-lg-4 col-md-6 mb-4" v-for="(company,index) in companies.data" :key="index">
            <div class="restaurant-card">
              <a href="vitrine-tenant.html">
                  <img v-if="company.image"
                    class="card-img-top" 
                    :src="company.image" 
                    :alt="company.image">

                <img v-else
                    class="card-img-top" 
                    src="@/assets/imgs/vue-food.png" 
                    alt="">
                </a>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name:'products'}">{{company.name}}</router-link>
                </h3>
              </div>
            </div>
          </div>



        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->

    </div>
</template>
<script>

import {mapActions} from 'vuex'
export default {
    mounted(){

        // o parametro que ele espera commit é defautl, então não repcisa passar/usando a action
        // this.$store.dispatch('getCompanies')
        //this.$store.dispatch(getCompanies,'sda') com parametro
        this.getCompanies() //nova forma de fazer, depois de mapear com o mapActions
    },
    computed:{
        companies () {
            console.log(this.$store.state.modules_companies.items)
            return this.$store.state.modules_companies.items
        }
    },
    methods: {
        ...mapActions([
            'getCompanies'
        ])
    }
}
</script>



