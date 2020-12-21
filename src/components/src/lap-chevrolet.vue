<template>
  <div class="chevrolet">
    <div class="chevrolet__wrapper">
      <div class="lap__container">
        <h1 class="lap__title">
          Запчасти для Chevrolet Lanos (с 2005г. - 2009г.) / Chevrolet Sens (с
          2004г. - 2009г.)
        </h1>
        <router-link to="/">
          <p class="lap__back-to">&larr; Выбрать другую машину</p>
        </router-link>
    <div class="chevrolet__parts-wrapper">
        <lap-part-category/>
        <div class="chevrolet__parts"> 
          <lap-parts-chevrolet
          v-for="chevrolet in CHEVROLET"
          :key="chevrolet.article"
          :chevrolet_data="chevrolet"
          @addToCart="addToCart"
          />
        </div>
</div>
      </div>
    </div>
  </div>
</template>
<script>
import LapPartCategory from './lap-part-category.vue';
import {mapActions, mapGetters} from 'vuex'
import LapPartsChevrolet from './lap-parts-chevrolet.vue';
export default {
  components: {LapPartCategory, LapPartsChevrolet },
  name: "lap-chevrolet",
  data() {
    return{}
  },
  methods: {
    ...mapActions([
      'GET_CHEVROLET_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_CHEVROLET_FROM_API()
  },
  computed: {
    ...mapGetters([
      'CHEVROLET',
      'CART'
    ])
  }
};
</script>
<style>
.chevrolet__parts-wrapper {
    display: flex;
    margin-bottom: 100px;
}
.chevrolet__parts {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 458px;
}
.lap__back-to {
  color: #171717;
}
</style>
