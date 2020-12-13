<template>
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
</template>
<script>
export default {
    name: 'lap-header',
}
</script>
<style>
body {
    margin: 0;
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