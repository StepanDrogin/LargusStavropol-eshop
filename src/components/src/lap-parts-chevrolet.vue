<template>
  <div class="lap__part">
        <p class="lap-part-name">{{chevrolet_data.name}}</p>
    <img class="lap__part-img" :src="require('../../assets/lap-card/' + chevrolet_data.image)" alt="auto-part" />
    <div class="lap__part-info">
    <p class="lap__part-price">{{chevrolet_data.price}}</p>
    <button class="add__button" 
    @click="addToCart"
    >Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "lap-parts-chevrolet",
      props: {
        chevrolet_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart',this.chevrolet_data);
        }
    },
};
</script>

<style>
.lap-part-name {
  text-align: center
}
.lap__part-img {
  height: 180px;
    width: 257px;
    border-top: 2px solid #171717;
    border-bottom: 2px solid #171717;
box-sizing: border-box;
}
.lap__part-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 7px;
}
.lap__part {
    background: rgb(233, 228, 227);
    margin: 20px 20px 20px 20px;
    border: 2px solid #171717;
box-sizing: border-box;
border-radius: 4px;
    max-height: 326px;
    max-width: 261px;
}
.add__button {
    width: 75px;
    height: 34px;
    border-radius: 7px;
    background: rgb(16, 109, 56);
    color: white;
}
.lap__part-price {
    border: 2px solid #383838;
padding: 4px;
}
</style>
