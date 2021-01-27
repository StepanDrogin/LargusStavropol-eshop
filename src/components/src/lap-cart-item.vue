<template>
  <div class="cart__item">
    <div class="lap__container">
      <div class="cart__container">
        <div class="cart__item-img">
          <img
            class="lap__cart-img"
            :src="require('../../assets/lap-card/' + cart_item_data.image)"
            alt="auto-part"
          />
        </div>
        <p class="lap__part-name">{{ cart_item_data.name }}</p>
        <div class="cart__counter">
          <button class="cart__counter-decrement" @click="decrementItem">
            -
          </button>
          <p class="cart__counter-num">{{ cart_item_data.quantity }}</p>
          <button class="cart__counter-increment" @click="incrementItem">
            +
          </button>
        </div>
        <div class="cart__price-and-delete">
          <p class="cart__item-price">{{ cart_item_data.price }} &#8381;</p>
          <button class="cart__item-delete" @click="deleteFromCart">
            &#128465;&#65039;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lap-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style>
.cart__container {
  display: flex;
  border-top: 1px solid #383838;
  border-bottom: 1px solid #383838;
  margin: 35px 0px;
}
.cart__counter {
  display: flex;
  margin: 25px;
  align-items: center;
}
.lap__cart-img {
  max-width: 250px;
  max-height: 250px;
}
.lap__part-name {
  margin: auto;
}
.cart__counter-num {
  padding: 0px 20px;
}
.cart__price-and-delete {
  display: flex;
  align-items: center;
}
.cart__item-price {
  margin: 0px 15px;
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .cart__container {
    flex-direction: column;
  }
  .cart__price-and-delete {
    justify-content: center;
  }
  .cart__counter {
    justify-content: center;
    margin: 0px;
  }
}

@media (max-width: 320px) {
  .cart__container {
    flex-direction: column;
  }
  .cart__price-and-delete {
    justify-content: center;
  }
  .cart__counter {
    justify-content: center;
    margin: 0px;
  }
}
</style>