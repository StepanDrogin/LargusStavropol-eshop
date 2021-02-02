<template>
  <div class="lada">
    <div class="lap__container">
      <h1 class="lap__title">Запчасти для Lada Largus (c 2012г.)</h1>
        <p class="lap__subtitlle">На сайте представлен не весь ассортимент, позвоните нам для уточнения интересующей вас запчасти! </p>
        <div class="header__info-phone--white">
        <img src="../../assets/img-header/phone-call.svg" alt="phone-call" />
        <a class="header__info--white" href="tel:+79097699642">+7 (909) 769-96-42</a>
      </div>
      <div class="nav__menu-block">
        <div class="nav__menu-wrapper">
        <input
          type="text"
          class="nav__menu-field"
          placeholder="поиск по каталогу"
          v-model="searchValue"
          v-on:keyup.enter="search(searchValue)"
        />
        <img
          class="nav__menu-search"
          src="../../assets/img-header/shop-search.svg"
          alt="shop-search"
          @click="search(searchValue)"
        />
      </div>
      </div>
      <router-link to="/">
        <p class="lap__back-to">&larr; Выбрать другую машину</p>
      </router-link>
      <div class="lada__parts-wrapper">
        <lap-part-category
          :options="options"
          @select="sortByCategories"
          :selected="selected"
        />
        <div class="lada__parts">
          <lap-parts-lada
            v-for="lada in filteredLada"
            :key="lada.article"
            :lada_data="lada"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LapPartCategory from "./lap-part-category.vue";
import { mapActions, mapGetters } from "vuex";
import LapPartsLada from "./lap-parts-lada.vue";
export default {
  components: { LapPartCategory, LapPartsLada },
  name: "lap-lada",
  data() {
    return {
      searchValue: "",
      options: [
        { name: "Все товары", value: 0 },
        { name: "Выхлопная система", value: 1 },
        { name: "Двигатель", value: 2 },
        { name: "Оптика и стёкла", value: 3 },
        { name: "Отопление и кондиционирование", value: 4 },
        { name: "Ремни и ролики", value: 5 },
        { name: "Рулевая система", value: 6 },
        { name: "Система зажигания", value: 7 },
        { name: "Система охлаждения", value: 8 },
        { name: "Система питания", value: 9 },
        { name: "Тормозная система", value: 10 },
        { name: "Фильтра", value: 11 },
        { name: "Ходовая часть", value: 12 },
        { name: "Электрооборудование", value: 13 },
      ],
      selected: "Открыть все категории товаров",
      sortedLada: [],
    };
  },
  methods: {
    ...mapActions([
      "GET_LADA_FROM_API",
      "ADD_TO_CART",
      "GET_SEARCH_VALUE_TO_VUEX",
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
    },
    sortByCategories(category) {
      this.sortedLada = [];
      let vm = this;
      this.LADA.map(function (item) {
        if (item.category === category.name) {
          vm.sortedLada.push(item);
        }
      });
      this.selected = category.name;
    },
    optionSelect(option) {
      this.selected = option.name;
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortProductsBySearchValue(value) {
      this.sortedLada = [...this.LADA];
      if (value) {
        this.sortedLada = this.sortedLada.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedLada = this.LADA;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_LADA_FROM_API();
  },
  computed: {
    ...mapGetters(["LADA", "CART", "SEARCH_VALUE"]),
    filteredLada() {
      if (this.sortedLada.length) {
        return this.sortedLada;
      } else {
        return this.LADA;
      }
    },
  },
};
</script>

<style>
.lada__parts-wrapper {
  display: flex;
  margin-bottom: 100px;
}
.lada__parts {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: auto;
}
.lap__back-to {
  color: #171717;
}
@media (max-width: 320px) {
.nav__menu-search {
  margin-top: 15px;
}
.nav__menu-wrapper {
  display: flex;
  flex-direction: column;
}
}
</style>