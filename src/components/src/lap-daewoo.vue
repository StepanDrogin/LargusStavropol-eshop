<template>
    <div class="lap-daewoo">
        <div class="daewoo__wrapper">
            <div class="lap__container">
          <h1 class="lap__title">
          Запчасти для Daewoo Nexia (с 1994г. - 2016г.) / Daewoo Matiz (с
          1997г. - 2015г.)
        </h1>
        <router-link to="/">
          <p class="lap__back-to">&larr; Выбрать другую машину</p>
        </router-link>
<div class="daewoo__parts-wrapper">
        <lap-part-category/>
<div class="daewoo__parts">
       <lap-parts-daewoo
          v-for="daewoo in DAEWOO"
          :key="daewoo.article"
          :daewoo_data="daewoo"
       />
</div>
</div>
            </div>            
        </div>
    </div>
</template>

<script>
import lapPartCategory from './lap-part-category.vue'
import LapPartsDaewoo from './lap-parts-daewoo.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {lapPartCategory, LapPartsDaewoo},
    name: 'lap-daewoo',
      data() {
    return{}
  },
  methods: {
    ...mapActions([
      'GET_DAEWOO_FROM_API',
      'ADD_TO_CART'
    ]),
      addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_DAEWOO_FROM_API()
  },
  computed: {
    ...mapGetters([
      'DAEWOO',
      'CART'
    ])
  }
};
</script>

<style>
.daewoo__parts-wrapper{
    display: flex;
    margin-bottom: 250px;
}
.daewoo__parts {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 175px;
}
.lap__back-to {
  color: #171717;
}
</style>