<template>
    <div class="lap">
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
   v-for="product in products"
   :key="product.article"
   :product_data="product"
   />
   </div>
 </div>
 <div class="lap__container">
 <h2 class="catalog__title">Каталог автозапчастей <div class="catalog__title-underline"></div>
 </h2>
 <div class="catalog__items">
 <div class="catalog__item">
   <img class="catalog__item-img" src="../assets/catalog-car/chevrolet.svg" alt="chevrolet">
<h3 class="catalog-item-name"> CHEVROLET
  <div class="catalog-item-underline"></div>
</h3>
<p class="catalog-item-subtitle">Lanos</p>
<p class="catalog-item-subtitle">Sens</p>
 </div>
 <div class="catalog__item">
   <img class="catalog__item-img" src="../assets/catalog-car/daewoo.svg" alt="daewoo">
<h3 class="catalog-item-name"> DAEWOO
  <div class="catalog-item-underline"></div>
</h3>
<p class="catalog-item-subtitle">Nexia</p>
<p class="catalog-item-subtitle">Matiz</p>
 </div>
 <div class="catalog__item">
   <img class="catalog__item-img" src="../assets/catalog-car/lada.svg" alt="lada">
<h3 class="catalog-item-name"> LADA
  <div class="catalog-item-underline"></div>
  </h3>
  <p class="catalog-item-subtitle">Largus</p>
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
</div>
</template>

<script>
import LapCard from './src/lap-card.vue'

export default {
  components: {LapCard},
    name: 'lap-main-wrapper',
    data() {
      return {
          "products": [
    {
      image: "1.jpg",
      name: "Масла",
      article: "А1"
    },
    {
      image: "2.jpg",
      name: "Автохимия",
      article: "А2"
    },
    {
      image: "3.jpg",
      name: "Аксессуары",
      article: "А3"
    },
    {
      image: "4.jpg",
      name: "Выхлопные системы",
      article: "А4"
    },
    {
      image: "5.jpg",
      name: "Двигатель",
      article: "А5"
    },
    {
      image: "6.jpg",
      name: "Детали кузова",
      article: "А6"
    },
    {
      image: "7.jpg",
      name: "Стекла и оптика",
      article: "А7"
    },
    {
      image: "8.jpg",
      name: "Отделка салона",
      article: "А8"
    },
    {
      image: "9.jpg",
      name: "Отопление/кондиционирование",
      article: "А9"
    },
    {
      image: "10.jpg",
      name: "Ремни и ролики",
      article: "А10"
    },
    {
      image: "11.jpg",
      name: "Рулевая система",
      article: "А11"
    },
    {
      image: "12.jpg",
      name: "Система зажигания",
      article: "А12"
    },
    {
      image: "13.jpg",
      name: "Система охлаждения",
      article: "А13"
    },
    {
      image: "14.jpg",
      name: "Система питания",
      article: "А14"
    },
    {
      image: "15.jpg",
      name: "Стеклоочистители",
      article: "А15"
    },
    {
      image: "16.jpg",
      name: "Стеклоподъемники",
      article: "А16"
    },
    {
      image: "17.jpg",
      name: "Сцепление",
      article: "А17"
    },
    {
      image: "18.jpg",
      name: "Трансмиссия",
      article: "А18"
    },
    {
      image: "19.jpg",
      name: "Тормозная система",
      article: "А19"
    },
    {
      image: "20.jpg",
      name: "Фильтра",
      article: "А20"
    },
    {
      image: "21.jpg",
      name: "Ходовая часть",
      article: "А21"
    },
    {
      image: "22.jpg",
      name: "Электрооборудование",
      article: "А22"
    }
  ]
      }
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