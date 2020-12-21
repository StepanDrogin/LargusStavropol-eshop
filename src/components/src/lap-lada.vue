<template>
    <div class="lada">
        <div class="lap__container">
<h1 class="lap__title">
          Запчасти для Chevrolet Lanos (с 2005г. - 2009г.) / Chevrolet Sens (с
          2004г. - 2009г.)
        </h1>
        <router-link to="/">
          <p class="lap__back-to">&larr; Выбрать другую машину</p>
        </router-link>
        <div class="lada__parts-wrapper">
            <lap-part-category/>
            <div class="lada__parts">
          <lap-parts-lada
          v-for="lada in LADA"
          :key="lada.article"
          :lada_data="lada"
          />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import LapPartCategory from './lap-part-category.vue'
import {mapActions, mapGetters} from 'vuex'
import LapPartsLada from './lap-parts-lada.vue';
export default {
  components: {LapPartCategory, LapPartsLada},
    name: 'lap-lada',
      data() {
    return{}
  },
  methods: {
    ...mapActions([
      'GET_LADA_FROM_API'
    ])
  },
  mounted() {
    this.GET_LADA_FROM_API()
  },
  computed: {
    ...mapGetters([
      'LADA'
    ])
  }
}
</script>

<style>
.lada__parts-wrapper {
    display: flex;
    margin-bottom: 100px;
}
.lada__parts {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 458px;
}
.lap__back-to {
  color: #171717;
}
</style>