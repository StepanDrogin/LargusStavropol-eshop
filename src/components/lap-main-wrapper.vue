<template>
  <div class="lap">
    <lap-header />
    <div class="lap__wrapper">
      <div class="lap__info-wrapper">
        <div class="lap__info">
          <h1 class="lap__info-title">Магазин автозапчастей Largus Auto</h1>
          <p class="lap__info-subtitle">
            Качественные автозапчасти по низким ценам напрямую от
            производителей.
          </p>
          <a href="#catalog__ancher"
            ><p class="lap__info-button">В КАТАЛОГ</p></a
          >
        </div>
        <img
          class="lap__image"
          src="../assets/main-page/largus.png"
          alt="largus-image"
        />
      </div>
    </div>
    <div class="lap__container">
      <h2 class="lap__container-products">
        Товары
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
      <h2 id="catalog__ancher" class="catalog__title">
        Каталог автозапчастей
        <div class="catalog__title-underline"></div>
      </h2>
      <div class="catalog__items">
        <div class="catalog__item">
          <router-link :to="{ name: 'chevrolet' }">
            <img
              class="catalog__item-img"
              src="../assets/catalog-car/chevrolet.svg"
              alt="chevrolet"
            />
            <h3 class="catalog-item-name">
              CHEVROLET
              <div class="catalog-item-underline"></div>
            </h3>
            <p class="catalog-item-subtitle">Lanos</p>
            <p class="catalog-item-subtitle">Sens</p>
          </router-link>
        </div>
        <div class="catalog__item">
          <router-link :to="{ name: 'daewoo' }">
            <img
              class="catalog__item-img"
              src="../assets/catalog-car/daewoo.svg"
              alt="daewoo"
            />
            <h3 class="catalog-item-name">
              DAEWOO
              <div class="catalog-item-underline"></div>
            </h3>
            <p class="catalog-item-subtitle">Nexia</p>
            <p class="catalog-item-subtitle">Matiz</p>
          </router-link>
        </div>
        <div class="catalog__item">
          <router-link :to="{ name: 'lada' }">
            <img
              class="catalog__item-img"
              src="../assets/catalog-car/lada.svg"
              alt="lada"
            />
            <h3 class="catalog-item-name">
              LADA
              <div class="catalog-item-underline"></div>
            </h3>
            <p class="catalog-item-subtitle">Largus</p>
          </router-link>
        </div>
      </div>
      <h2 class="catalog__title">
        Наши преимущества
        <div class="catalog__title-underline"></div>
      </h2>
      <div id="advantages__anchor" class="advantages">
        <div class="advantages__item">
          <img
            src="../assets/advantages-img/exp.svg"
            alt="exp"
            class="advantages__item-img"
          />
          <h4 class="advantages__title">Опыт</h4>
          <p class="advantages__subtitle">
            Мы более 20 лет на рынке автозапчастей, в этом деле нам нет равных
          </p>
        </div>
        <div class="advantages__item">
          <img
            src="../assets/advantages-img/tool-box.svg"
            alt="tool-box"
            class="advantages__item-img"
          />
          <h4 class="advantages__title">Оборудование</h4>
          <p class="advantages__subtitle">
            Современное оборудование позволяет нам быстро диагностировать и
            решить проблему
          </p>
        </div>
        <div class="advantages__item">
          <img
            src="../assets/advantages-img/best-price.svg"
            alt="best-price"
            class="advantages__item-img"
          />
          <h4 class="advantages__title">Цены</h4>
          <p class="advantages__subtitle">
            Стоимость выполняемых работ доступна каждому автовладельцу
          </p>
        </div>
        <div class="advantages__item">
          <img
            src="../assets/advantages-img/galochka.svg"
            alt="galochka"
            class="advantages__item-img"
          />
          <h4 class="advantages__title">Гарантия</h4>
          <p class="advantages__subtitle">
            Мы даем гарантию на все виды наших работ
          </p>
        </div>
      </div>
    </div>
    <lap-footer />
  </div>
</template>

<script>
import LapCard from "./src/lap-card.vue";
import LapFooter from "./src/lap-footer.vue";
import LapHeader from "./src/lap-header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { LapCard, LapHeader, LapFooter },
  name: "lap-main-wrapper",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    addToCart(data) {
      console.log(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.lap__wrapper {
  margin: auto;
  background: #171717;
  color: white;
  display: flex;
  justify-content: center;
}
.lap__info-wrapper {
  display: flex;
  max-width: 75%;
}
.lap__image {
  max-height: 450px;
  margin-top: 50px;
}
.lap__info {
  margin: 100px;
  max-width: 400px;
}
.lap__info-button {
  border: 3px solid #e83c26;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 25px 10px;
  display: inline;
  font-weight: 450;
  font-size: 24px;
}
.lap__info-button:hover {
  background: #e83c26;
  color: white;
  box-shadow: inset 0 0 0 3px #e83c26;
  transition: all 0.3s ease;
}
.lap__info-subtitle {
  margin: 15px 0px 75px;
  font-size: 24px;
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
.lap__info-title {
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
}
.lap__container-products {
  margin: 80px 40px;
  font-style: normal;
  font-weight: 750;
  font-size: 42px;
}
.lap__container-underline {
  max-width: 175px;
  margin: 6px 0px 25px;
  border: 1px solid #e83c26;
}
.catalog__title {
  text-align: center;
  margin-top: 200px;
  margin-bottom: 134px;
  font-style: normal;
  font-weight: 750;
  font-size: 42px;
}
.catalog__title-underline {
  max-width: 250px;
  margin: 6px 0px 25px;
  border: 1px solid #e83c26;
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
  background: #e83c26;
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
  font-style: normal;
  font-weight: 750;
  font-size: 42px;
}
.advantages__item {
  text-align: center;
  flex-basis: 25%;
}
.advantages__subtitle {
  max-width: 200px;
  margin: 0 auto;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
}
.advantages__title {
  font-style: normal;
  font-weight: 450;
  font-size: 28px;
}
@media (min-width: 1200px) {
  .burger {
    display: none;
  }
  .lap__info-wrapper {
    max-width: 100%;
  }
  .lap__cards {
    margin: 18px;
    padding: 0px;
  }
  .lap__image {
    max-height: 430px;
  }
}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
  .burger {
    display: none;
  }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  .burger {
    display: none;
  }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .lap__info-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
  }
  .lap__image {
    max-height: 300px;
  }
  .lap__wrapper {
    display: flex;
    flex-direction: column;
  }
  .lap__info {
    margin: 0px;
    display: block;
    max-width: 275px;
    justify-content: center;
    margin: 0 auto;
  }
  .lap__info-button {
    margin-left: 43px;
  }
  .lap__info-title {
    display: block;
    width: 280px;
    font-size: 21px;
    text-align: center;
  }
  .lap__info-subtitle {
    display: flex;
    width: 280px;
    text-align: center;
  }
  .lap__cards {
    padding: 0px;
  }
  .lap__card {
    margin: 10px;
  }
  .lap__container-products {
    font-size: 2em;
  }
  .catalog__title {
    font-size: 2em;
  }
  .lap__container-list {
    justify-content: center;
  }
  .catalog__items {
    flex-direction: column;
  }
  .catalog__item {
    margin-top: 45px;
    width: 230px;
  }
  .advantages {
    flex-direction: column;
  }
  .advantages__item {
    margin-top: 15px;
  }
  .advantages__title {
    margin: 15px;
  }
  .advantages__item-img {
    margin-top: 15px;
  }
  .lap__container {
    margin: 0px 15%;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .lap__info-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
  }
  .lap__wrapper {
    display: flex;
    flex-direction: column;
  }
  .lap__info {
    margin: 0px;
    display: block;
    max-width: 275px;
  }
  .lap__image {
    max-height: 180px;
  }
  .lap__info-button {
    margin-left: 43px;
  }
  .lap__info-title {
    display: block;
    width: 280px;
    font-size: 21px;
    text-align: center;
  }
  .lap__info-subtitle {
    display: flex;
    width: 280px;
    text-align: center;
  }
  .lap__cards {
    padding: 0px;
  }
  .lap__container-products {
    font-size: 2em;
  }
  .catalog__title {
    font-size: 2em;
  }
  .lap__container-list {
    justify-content: center;
  }
  .catalog__items {
    flex-direction: column;
  }
  .catalog__item {
    margin-top: 15px;
    width: 230px;
  }
  .advantages {
    flex-direction: column;
  }
  .advantages__item {
    margin-top: 15px;
  }
  .advantages__title {
    margin: 15px;
  }
  .advantages__item-img {
    margin-top: 15px;
  }
  .lap__container {
    margin: 0px 15%;
  }
}

@media (max-width: 320px) {
  .footer {
    flex-direction: column;
  }
  .lap__info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .lap__wrapper {
    display: flex;
    flex-direction: column;
  }
  .lap__info {
    margin: 0px;
    display: block;
    max-width: 275px;
  }
  .lap__image {
    max-height: 180px;
  }
  .lap__info-button {
    margin-left: 0px;
  }
  .lap__info-title {
    display: block;
    width: 180px;
    font-size: 21px;
    text-align: center;
  }
  .lap__info-subtitle {
    display: flex;
    width: 180px;
    text-align: center;
  }
  .lap__cards {
    padding: 0px;
  }
  .lap__container-products {
    font-size: 2em;
  }
  .catalog__title {
    font-size: 2em;
  }
  .catalog__items {
    flex-direction: column;
  }
  .catalog__item {
    margin-top: 15px;
    width: 230px;
  }
  .advantages {
    flex-direction: column;
  }
  .advantages__item {
    margin-top: 15px;
  }
  .advantages__title {
    margin: 15px;
  }
  .advantages__item-img {
    margin-top: 15px;
  }
  .lap__container {
    margin: 0px 10%;
  }
}
</style>