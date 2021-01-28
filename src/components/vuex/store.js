import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    searchValue: "",
    products: [],
    cart: [],
    chevrolet: [],
    daewoo: [],
    lada: [],
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value;
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CHEVROLET_TO_STATE: (state, chevrolet) => {
      state.chevrolet = chevrolet;
    },
    SET_LADA_TO_STATE: (state, lada) => {
      state.lada = lada;
    },
    SET_DAEWOO_TO_STATE: (state, daewoo) => {
      state.daewoo = daewoo;
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    SET_CART: (state, chevrolet) => {
      if (state.cart.length) {
        let isChevroletExists = false;
        state.cart.map(function(item) {
          if (item.article === chevrolet.article) {
            isChevroletExists = true;
            item.quantity++;
          }
        });
        if (!isChevroletExists) {
          state.cart.push(chevrolet);
        }
      } else {
        state.cart.push(chevrolet);
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
      commit("SET_SEARCH_VALUE_TO_VUEX", value);
    },
    GET_PRODUCTS_FROM_API({ commit }) {
      return Axios("https://my-json-server.typicode.com/StepanDrogin/fake-api/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_CHEVROLET_FROM_API({ commit }) {
      return Axios("https://my-json-server.typicode.com/StepanDrogin/fake-api/chevrolet", {
        method: "GET",
      })
        .then((chevrolet) => {
          commit("SET_CHEVROLET_TO_STATE", chevrolet.data);
          return chevrolet;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_LADA_FROM_API({ commit }) {
      return Axios("https://my-json-server.typicode.com/StepanDrogin/fake-api/lada", {
        method: "GET",
      })
        .then((lada) => {
          commit("SET_LADA_TO_STATE", lada.data);
          return lada;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_DAEWOO_FROM_API({ commit }) {
      return Axios("https://my-json-server.typicode.com/StepanDrogin/fake-api/daewoo", {
        method: "GET",
      })
        .then((daewoo) => {
          commit("SET_DAEWOO_TO_STATE", daewoo.data);
          return daewoo;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, chevrolet) {
      commit("SET_CART", chevrolet);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
  },
  getters: {
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
    PRODUCTS(state) {
      return state.products;
    },
    CHEVROLET(state) {
      return state.chevrolet;
    },
    DAEWOO(state) {
      return state.daewoo;
    },
    LADA(state) {
      return state.lada;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
