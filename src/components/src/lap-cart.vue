<template>
    <div class="lap__cart">
        <card-popup
      v-if="isCardPopupVisible"
      @closeCardPopup="closeCardPopup">

        </card-popup>

            <div class="lap__container">
                <h1 class="cart__title">Ваша корзина</h1>
                <p class="lap__description" v-if="!cart_data.length">Ваша корзина на данный момент пуста</p>
                <p class="lap__description" v-if="cart_data.length">Вы выбрали выгодные предложения, оформите заказ пока они есть в наличии и не изменилась стоимость</p>
            </div>
        <lap-cart-item
         v-for="(item, index) in cart_data"
         :key="item.article"
         :cart_item_data="item"
         @deleteFromCart="deleteFromCart(index)"
         @increment="increment(index)"
         @decrement="decrement(index)"
        />
        <div class="lap__bottom">
            <div class="lap__total">
                <p class="lap__total-count">Итого: {{cartTotalCost}} &#8381;</p>
            </div>
            <button class="lap__button-buy"
            @click="showPopupCard"
            >Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import lapCartItem from './lap-cart-item.vue'
import {mapGetters, mapActions} from 'vuex'
import CardPopup from '../popup/card-popup.vue'
export default {
  components: { lapCartItem, CardPopup },
    name: 'lap-cart',
    computed: {
        ...mapGetters([
            'CART'
        ]),
        cartTotalCost() {
            return this.cart_data.reduce((res, item) => res + item.price * item.quantity, 0)
        }
    },
    data() {
        return {
            isCardPopupVisible: false,
        }
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
        this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
        this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        showPopupCard() {
            this.isCardPopupVisible = true;
        },
        closeCardPopup() {
            this.isCardPopupVisible = false;
        }
    }
}
</script>

<style>
.cart__title {
    font-style: normal;
    font-weight: 750;
    font-size: 42px;
}
.lap__description {
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
}
.lap__bottom{
    display: flex;
    justify-content: space-between;
    margin: 200px auto;
    max-width: 70%;
}
.lap__button-buy {
    background: #171717;
    border-radius: 4px;
    color: #FDFDFD;
    padding: 15px 40px;
    font-weight: 750;
    font-size: 24px;
    line-height: 29px;
    height: 70px;
    margin-top: 20px;
}
.lap__total-count{
    font-size: 32px;
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
.lap__bottom {
    flex-direction: column;
}
.lap__button-buy {
    height: 100px;
    padding: 0px;
}
}

@media (max-width: 320px) {
.lap__bottom {
    flex-direction: column;
}
.lap__button-buy {
    height: 100px;
    padding: 0px;
}
}
</style>