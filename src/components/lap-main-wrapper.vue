<template>
    <div class="lap">
      <lap-header/>
      <div class="lap__wrapper">
      <div class="lap__info">
      <h1 class="lap__info-title">Магазин автозапчастей Largus Auto</h1>
      <p class="lap__info-subtitle">Качественные автозапчасти по низким ценам напрямую от производителей.</p>
      <p class="lap__info-button">В КАТАЛОГ</p>
      </div>
      <img class="lap__image" src="../assets/main-page/largus.png" alt="largus-image">
    </div>
<div class="lap__container">
  <h2 class="lap__container-products">Товары
    <div class="lap__container-underline"></div>
  </h2>
    <div class="lap__container-list">
   <lap-card
   v-for="product in PRODUCTS"
   :key="product.article"
   :product_data="product"
   @addToCart="addToCart"
   />
   </div>
 </div>
 <div class="lap__container">
 <h2 class="catalog__title">Каталог автозапчастей <div class="catalog__title-underline"></div>
 </h2>
 <div class="catalog__items">
 <div class="catalog__item">
<router-link :to="{name: 'chevrolet'}">
   <img class="catalog__item-img" src="../assets/catalog-car/chevrolet.svg" alt="chevrolet">
<h3 class="catalog-item-name"> CHEVROLET
  <div class="catalog-item-underline"></div>
</h3>
<p class="catalog-item-subtitle">Lanos</p>
<p class="catalog-item-subtitle">Sens</p>
</router-link>
 </div>
 <div class="catalog__item">
<router-link :to="{name: 'daewoo'}">
   <img class="catalog__item-img" src="../assets/catalog-car/daewoo.svg" alt="daewoo">
<h3 class="catalog-item-name"> DAEWOO
  <div class="catalog-item-underline"></div>
</h3>
<p class="catalog-item-subtitle">Nexia</p>
<p class="catalog-item-subtitle">Matiz</p>
</router-link>
 </div>
 <div class="catalog__item">
<router-link :to="{name: 'lada'}">
   <img class="catalog__item-img" src="../assets/catalog-car/lada.svg" alt="lada">
<h3 class="catalog-item-name"> LADA
  <div class="catalog-item-underline"></div>
  </h3>
  <p class="catalog-item-subtitle">Largus</p>
</router-link>
 </div>
 </div>
   <h2 class="catalog__title">Наши преимущества
    <div class="catalog__title-underline"></div>
  </h2>
  <div class="advantages">
    <div class="advantages__item">
      <img src="../assets/advantages-img/exp.svg" alt="exp" class="advantages__item-img">
      <h4 class="advantages__title">Опыт</h4>
      <p class="advantages__subtitle">Мы более 20 лет на рынке автозапчастей, в этом деле нам нет равных</p>
    </div>
    <div class="advantages__item">
      <img src="../assets/advantages-img/tool-box.svg" alt="tool-box" class="advantages__item-img">
      <h4 class="advantages__title">Оборудование</h4>
      <p class="advantages__subtitle">Современное оборудование позволяет нам быстро диагностировать и решить проблему</p>
    </div>
    <div class="advantages__item">
      <img src="../assets/advantages-img/best-price.svg" alt="best-price" class="advantages__item-img">
      <h4 class="advantages__title">Цены</h4>
      <p class="advantages__subtitle">Стоимость выполняемых работ доступна каждому автовладельцу</p>
    </div>
    <div class="advantages__item">
      <img src="../assets/advantages-img/galochka.svg" alt="galochka" class="advantages__item-img">
      <h4 class="advantages__title">Гарантия</h4>
      <p class="advantages__subtitle">Мы даем гарантию на все виды наших работ</p>
    </div>
  </div>
</div>
<lap-footer/>
</div>
</template>

<script>
import LapCard from './src/lap-card.vue'
import LapFooter from './src/lap-footer.vue'
import LapHeader from './src/lap-header.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {LapCard, LapHeader,LapFooter},
    name: 'lap-main-wrapper',
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    addToCart(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
}
</script>

<style>
body {
  margin: 0px;
}
.lap__wrapper {
  margin: auto;
  background: #171717;
  color: white;
  display: flex;
  justify-content: center;
}
.lap__image {
  max-height: 450px;
  margin-top: 50px;
}
.lap__info {
  margin: 120px 200px 150px 200px;
  max-width: 400px;
}
.lap__info-button {
  border: 3px solid #E83C26;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 25px 10px;
  display: inline;
}
.lap__info-subtitle {
  margin: 15px 0px 30px;
}
.lap__container {
    margin: 0 auto;
    max-width: 70%;
    width: 100%;
}
.lap__container-list {
  display: flex;
  flex-wrap: wrap;
}
.lap__container-products {
  margin: 80px 0px;
}
.lap__container-underline {
  max-width: 100px;
  margin: 6px 0px 25px;
  border: 1px solid #E83C26;
}
.catalog__title {
  text-align: center;
  margin: 134px;
}
.catalog__title-underline {
  max-width: 175px;
  margin: 6px 0px 25px;
  border: 1px solid #E83C26;
  margin: 22px auto 48px;
}
.catalog-item-underline {
  max-width: 100px;
  margin: 6px auto 16px;
  border: 1px solid white;
}
.catalog__items {
  display: flex;
}
.catalog__item {
flex-basis: 25%;
background: #E83C26;
text-align: center;
margin: auto;
height: 270px;
width: 392px;
align-items: center;
color: white;
}
.catalog-item-subtitle {
  padding: 0px 0px 10px;
}
.catalog__item-img {
  margin-top: 20px;
  width: 184px;
  height: 62px;
}
.advantages {
  display: flex;
  margin: 0 auto 160px;
}
.advantages__item {
  text-align: center;
  flex-basis: 25%;
}
.advantages__subtitle {
  max-width: 200px;
  margin: 0 auto;
}
</style>