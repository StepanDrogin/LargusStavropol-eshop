<template>
  <div class="lap-daewoo">
    <div class="daewoo__wrapper">
      <div class="lap__container">
        <h1 class="lap__title">
          Запчасти для Daewoo Nexia (с 1994г. - 2016г.) / Daewoo Matiz (с 1997г.
          - 2015г.)
        </h1>
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
        <div class="daewoo__parts-wrapper">
          <lap-part-category
            :options="options"
            @select="sortByCategories"
            :selected="selected"
          />
          <div class="daewoo__parts">
            <lap-parts-daewoo
              v-for="daewoo in filteredDaewoo"
              :key="daewoo.article"
              :daewoo_data="daewoo"
              @addToCart="addToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lapPartCategory from "./lap-part-category.vue";
import LapPartsDaewoo from "./lap-parts-daewoo.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { lapPartCategory, LapPartsDaewoo },
  name: "lap-daewoo",
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
      sortedDaewoo: [],
    };
  },
  methods: {
    ...mapActions([
      "GET_DAEWOO_FROM_API",
      "ADD_TO_CART",
      "GET_SEARCH_VALUE_TO_VUEX",
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
    },
    sortByCategories(category) {
      this.sortedDaewoo = [];
      let vm = this;
      this.DAEWOO.map(function (item) {
        if (item.category === category.name) {
          vm.sortedDaewoo.push(item);
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
      this.sortedDaewoo = [...this.DAEWOO];
      if (value) {
        this.sortedDaewoo = this.sortedDaewoo.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedDaewoo = this.DAEWOO;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_DAEWOO_FROM_API();
  },
  computed: {
    ...mapGetters(["DAEWOO", "CART", "SEARCH_VALUE"]),
    filteredDaewoo() {
      if (this.sortedDaewoo.length) {
        return this.sortedDaewoo;
      } else {
        return this.DAEWOO;
      }
    },
  },
};
</script>

<style>
.daewoo__parts-wrapper {
  display: flex;
  margin-bottom: 100px;
}
.daewoo__parts {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: auto;
}
.lap__back-to {
  color: #171717;
}
.nav__menu-block {
  display: flex;
  padding: 10px;
}
.nav__menu-search {
  margin-left: 10px;
}
</style>