<template>
  <div class="lada">
    <div class="lap__container">
      <h1 class="lap__title">Запчасти для Lada Largus (c 2012г.)</h1>
      <div class="nav__menu-block">
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
        { name: "Детали кузова", value: 3 },
        { name: "Оптика и стёкла", value: 4 },
        { name: "Отделка салона", value: 5 },
        { name: "Отопление и кондиционирование", value: 6 },
        { name: "Ремни и ролики", value: 7 },
        { name: "Рулевая система", value: 8 },
        { name: "Система зажигания", value: 9 },
        { name: "Система охлаждения", value: 10 },
        { name: "Система питания", value: 11 },
        { name: "Стеклоочиститель и стекломыватель", value: 12 },
        { name: "Стеклоподъемники", value: 13 },
        { name: "Стеклоочистители и стеклоомыватели", value: 14 },
        { name: "Стеклоподъемники", value: 15 },
        { name: "Сцепление и трансмиссия", value: 16 },
        { name: "Тормозная система", value: 17 },
        { name: "Фильтра", value: 18 },
        { name: "Ходовая часть", value: 19 },
        { name: "Электрооборудование", value: 20 },
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
.nav__menu-block {
  display: flex;
  padding: 10px;
}
.nav__menu-search {
  margin-left: 10px;
}
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
</style>