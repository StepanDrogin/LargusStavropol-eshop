<template>
  <div class="header">
    <VueScrollProgress></VueScrollProgress>
    <Slide class="burger" right>
      <router-link class="ancher" :to="{ name: 'mainPage' }">
        <p class="nav__menu-item">Главная</p>
      </router-link>
      <a class="ancher" href="#catalog__ancher">
        <p class="nav__menu-item">Каталог</p>
      </a>
      <a class="ancher" href="#advantages__anchor">
        <p class="nav__menu-item">Контакты</p>
      </a>
      <a class="ancher" href="#advantages__anchor">
        <p class="nav__menu-item">Преимущества</p>
      </a>
      <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
        <div class="cart__wrapper">
          <img
            class="nav__menu-cart"
            src="../../assets/img-header/shop-cart.svg"
            alt="shop-cart"
          />
          <p class="cart__count">{{ CART.length }}</p>
        </div>
      </router-link>
    </Slide>
    <div class="header__info">
      <div class="header__info-phone">
        <img src="../../assets/img-header/phone-call.svg" alt="phone-call" />
        <p class="header__info">+7 (909) 769-96-42</p>
      </div>
      <div class="header__info-geo">
        <img src="../../assets/img-header/gps-icon.svg" alt="gps-icon" />
        <p class="header__info">
          г.Ставрополь, Старомарьевское шоссе, 7а Павильон № 28
        </p>
      </div>
      <div class="header__info-time">
        <img src="../../assets/img-header/time-icon.svg" alt="time-icon" />
        <p class="header__info">Мы открыты с 9.00 - 17.00</p>
      </div>
    </div>
    <div class="nav__menu">
      <div class="nav__logo">
        <router-link :to="{ name: 'mainPage' }">
          <img
            class="nav__logo"
            src="../../assets/img-header/shop-logo.svg"
            alt="shop-logo"
          />
        </router-link>
        <p class="nav__name">Largus Auto Parts</p>
      </div>
      <div class="nav__menu-items">
        <router-link class="ancher" :to="{ name: 'mainPage' }">
          <p class="nav__menu-item">Главная</p>
        </router-link>
        <a class="ancher" href="#catalog__ancher">
          <p class="nav__menu-item">Каталог</p>
        </a>
        <a class="ancher" href="#advantages__anchor">
          <p class="nav__menu-item">Контакты</p>
        </a>
        <a class="ancher" href="#advantages__anchor">
          <p class="nav__menu-item">Преимущества</p>
        </a>
        <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
          <div class="cart__wrapper">
            <img
              class="nav__menu-cart"
              src="../../assets/img-header/shop-cart.svg"
              alt="shop-cart"
            />
            <p class="cart__count">{{ CART.length }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide,
  },
  name: "lap-header",
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>
<style>
a {
  text-decoration: none;
  color: white;
}
.ancher {
  color: black;
}
.cart__wrapper {
  display: flex;
  cursor: pointer;
}
.cart__count {
  background: #e83c26;
  border-radius: 64px;
  width: 30px;
  text-align: center;
}
.nav__menu {
  display: flex;
  min-height: 173px;
}
.nav__name {
  margin: auto;
  max-width: 100px;
  font-style: normal;
  font-weight: 650;
  font-size: 17px;
}
.nav__logo {
  display: flex;
  margin: auto;
}
.nav__menu-items {
  display: flex;
  justify-content: space-around;
  min-width: 50%;
  margin: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
}
.nav__menu-item {
  text-decoration: none;
  display: flex;
}
.nav__menu-item:hover {
  background: #e83c26;
  color: white;
  box-shadow: inset 0 0 0 3px #e83c26;
  transition: all 0.3s ease;
  border-radius: 5px;
  padding: 10px;
}
.nav__menu-list {
  display: flex;
  justify-content: space-between;
}
.header__info {
  display: flex;
  justify-content: space-between;
  padding: 1px 12px 0px;
  text-align: center;
  background: #171717;
  color: #fdfdfd;
}
.header__info-phone {
  display: flex;
}
.header__info-geo {
  display: flex;
}
.header__info-time {
  display: flex;
}
#progress-container-el {
  /* background */
  background-color: #f4f4f4 !important;
}

#progress-el {
  /* progress bar */
  background-color: red !important;
}
.bm-menu {
  color: white !important;
}
.bm-overlay {
  background: white !important;
}
/* Large desktops and laptops */
@media (min-width: 1200px) {
  .burger {
    display: none;
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
  .header__info {
    display: block;
  }
  .nav__menu {
    display: none;
  }
  .burger {
    position: fixed;
    margin-left: 100%;
  }
  .bm-menu {
    background: floralwhite;
  }
  .lap__info-wrapper {
    display: block;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .header__info {
    display: block;
  }
  .nav__menu {
    display: none;
  }
  .burger {
    position: fixed;
    margin-left: 100%;
  }
  .bm-menu {
    background: floralwhite;
  }
  .lap__info-wrapper {
    display: block;
  }
}

@media (max-width: 320px) {
  .header__info {
    display: block;
  }
  .nav__menu {
    display: none;
  }
  .burger {
    position: fixed;
    margin-left: 100%;
  }
  .lap__info-wrapper {
    display: block;
  }
}
</style>