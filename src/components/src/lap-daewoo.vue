<template>
  <div class="lap-daewoo">
    <div class="daewoo__wrapper">
      <div class="lap__container">
        <h1 class="lap__title">
          Запчасти для Daewoo Nexia (с 1994г. - 2016г.) / Daewoo Matiz (с 1997г.
          - 2015г.)
        </h1>
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