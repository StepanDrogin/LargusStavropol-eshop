<template>
    <div class="popcard__wrapper">
        <div class="popcard">
            <div class="popcard__img">
                <img class="popcard__img" src="../../assets/cart/cat.svg" alt="">
            </div>
            <div class="popcard__sorry">
                <h3 class="we-sorry-1">Мы приняли вашу заявку!</h3>
                <p class="we-sorry-2">На данный момент оплата онлайн и доставка недоступны, вы можете забрать заказ самовывозом!</p>
                <button class="popcard__button"
            @click="closeCardPopup">
                Ясно
            </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-popup',
        methods: {
        closeCardPopup() {
            this.$emit('closeCardPopup')
        },
    },
}
</script>

<style>
.popcard__img {
    max-width: 150px;
    max-height: 150px;
}
.popcard__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
.popcard {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 16px;
    position: fixed;
    width: 550px;
    background: #ffffff;
    box-shadow: 0px 0 20px 15px #413b3b;
    z-index: 10;
}
@media (max-width: 767px) {
.lap-popup {
    width: 50%;
    flex-direction: column;
}
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
.popcard {
    width: 50%;
    flex-direction: column;
}
}

@media (max-width: 320px) {
.popcard {
    width: 50%;
    flex-direction: column;
}
}
</style>