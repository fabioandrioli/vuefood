<template>
     <div class="row">

      <div class="col-lg-3">

        <h1 class="my-4 title-tenant">{{this.company.name}}</h1>
        <div class="list-group">
           <a href="#"
              :class="['list-group-item',categoryInFilter('')]"
               @click.prevent="filterByCategory('')"
           >
            Todas
           </a>
          <a href="#" 
              
              v-for="(category,index) in categories.data" 
              :class="['list-group-item',categoryInFilter(category.identify)]" 
              @click.prevent="filterByCategory(category.identify)"
              :key="index"
          >
            {{category.name}}
          </a>
        </div>

      </div>
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">

        <div class="row my-4">

          <div v-if="company.products.data.length === 0">
              Nenhum produto encontrado
          </div>

          <div class="col-lg-4 col-md-6 mb-4" v-for="(product,index) in company.products.data" :key="index">
            <div :class="['card', 'h-100',{'disabled':productInCart(product)}]">
              <a href="#"><img class="card-img-top" :src="product.image" :alt="product.title"></a>
              <div class="card-body">
                <h4 class="card-title">
                  <router-link :to="{name:'cart'}">{{product.title}}</router-link>
                </h4>
                <h5>{{product.price}}</h5>
                <p class="card-text">{{product.description}}</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="#" @click.prevent="addProductCart(product)">
                  Adicionar no Carrinho <i class="fas fa-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->

    </div>
    <!-- /.row -->
</template>


<script>
import {mapState, mapActions, mapMutations} from 'vuex'
  export default {

    
    props:['companyUrl'],
    created() {
      if(this.company.name === ''){
        return this.$router.push({name:'home'})
      }

      this.getCategoriesByCompany(this.company.uuid)
          .catch(response => {
               this.$vToastify.error("Falha ao carregar categorias", "erro")
            })

      // this.getProductsByCompany(this.company.uuid)
      //     .catch(response => {
      //          this.$vToastify.error("Falha ao carregar os produtos", "erro")
      //       })
    
      this.loadProducts()
    },

    computed: {
      ...mapState({
        company: state => state.modules_companies.companySelected,
        categories: state => state.modules_companies.categoryCompanySelected,
        productsCart: state => state.modules_cart.products,
      })
    },

    data(){
      return{
        filters:{
          category:''
        },
      }
    },

    methods:{
      ...mapActions([
        'getCategoriesByCompany',
        'getProductsByCompany',

      ]),

     ...mapMutations({
       addProductCart:'ADD_PRODUCT_CART',
     }),

      loadProducts(){
        const params = {
          token_company: this.company.uuid,
        }

        if(this.filters.category){
          params.categories = [
            this.filters.category
          ]
        }

        this.getProductsByCompany(params)
            .catch(response => {
                this.$vToastify.error("Falha ao carregar os produtos", "erro")
              })
        },

        filterByCategory(identify){
          this.filters.category = identify
          this.loadProducts()
        },

        categoryInFilter(identify){
          return identify === this.filters.category ? 'active' : ''
        },

        productInCart(product){
          let inCart = false
          this.productsCart.map((prodCart,index) => {
            if(prodCart.identify === product.identify)
              inCart = true
          })
          return inCart
        },
    }
  }

</script>



