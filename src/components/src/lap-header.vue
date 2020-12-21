<template>
 <div class="header">
    <div class="header__info">
        <div class="header__info-phone">
        <img src="../../assets/img-header/phone-call.svg" alt="phone-call">
         <p class="header__info">+7 (909) 769-96-42</p>
        </div>
        <div class="header__info-geo">
         <img src="../../assets/img-header/gps-icon.svg" alt="gps-icon">
         <p class="header__info">г.Ставрополь, Старомарьевское шоссе, 7а Павильон № 28</p>
        </div>
        <div class="header__info-time">
         <img src="../../assets/img-header/time-icon.svg" alt="time-icon">
         <p class="header__info">Мы открыты с 9.00 - 17.00</p>
        </div>
        </div>
            <div class="nav__menu">
        <div class="nav__logo">
        <img class="nav__logo" src="../../assets/img-header/shop-logo.svg" alt="shop-logo">
        <p class="nav__name">Largus Auto Parts</p></div>
        <div class="nav__menu-items">
            <p class="nav__menu-item">Главная</p>
            <p class="nav__menu-item">Каталог</p>
            <p class="nav__menu-item">Контакты</p>
            <p class="nav__menu-item">Прочее</p>
            <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="cart__wrapper">
            <img class="nav__menu-cart" src="../../assets/img-header/shop-cart.svg" alt="shop-cart">
            <p class="cart__count">{{CART.length}}</p>
            </div>
            </router-link>
            <img class="nav__menu-search" src="../../assets/img-header/shop-search.svg" alt="shop-search">
        </div>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'lap-header',
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>
<style>
body {
    margin: 0;
}
a {
    text-decoration: none;
    color: white;
}
.cart__wrapper {
    display: flex;
}
.cart__count {
    background: #E83C26;
    border-radius: 64px;
    width: 25px;
    height: 20px;
    text-align: center;
    text-decoration: none;
}
.nav__menu {
    display: flex;
    min-height: 173px;
}
.nav__name {
    margin: auto;
    max-width: 100px;
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
}
.nav__menu-item {
    text-decoration: none;
    display: flex;
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
    color: #FDFDFD;
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
</style>