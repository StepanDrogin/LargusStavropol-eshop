<template>
    <div class="nav__menu">
        <div class="nav__logo">        
        <img class="nav__logo" src="../../assets/img-header/shop-logo.svg" alt="shop-logo">
        <p class="nav__name">Largus Auto Parts</p></div>
        <div class="nav__menu-items">
            <p class="nav__menu-item">Главная</p>
            <p class="nav__menu-item">Каталог</p>
            <p class="nav__menu-item">Контакты</p>
            <p class="nav__menu-item">Прочее</p>
            <img class="nav__menu-cart" src="../../assets/img-header/shop-cart.svg" alt="shop-cart">
            <img class="nav__menu-search" src="../../assets/img-header/shop-search.svg" alt="shop-search">
        </div>
    </div>
</template>

<script>
export default {
    name: 'lap-nav',
}
</script>

<style>
body {
    margin: 0;
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
</style>