<template>
    <div class="lap__cart">
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
            <button class="lap__button-buy">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import lapCartItem from './lap-cart-item.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: { lapCartItem },
    name: 'lap-cart',
    computed: {
        ...mapGetters([
            'CART'
        ]),
        cartTotalCost() {
            return this.cart_data.reduce((res, item) => res + item.price * item.quantity, 0)
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
        }
    }
}
</script>

<style>
.lap__bottom{
    display: flex;
    justify-content: space-between;
    margin: 150px auto 500px;
    max-width: 70%;
    width: 100%;
}
.lap__button-buy {
    background: #171717;
    border-radius: 4px;
    color: #FDFDFD;
    padding: 15px 40px;
}
</style>