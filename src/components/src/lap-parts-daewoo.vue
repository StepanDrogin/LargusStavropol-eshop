<template>
  <div class="lap__part">
        <p class="lap-part-name">{{daewoo_data.name}}</p>
    <img class="lap__part-img" :src="require('../../assets/lap-card/' + daewoo_data.image)" alt="auto-part" />
    <div class="lap__part-info">
    <p class="lap__part-price">{{daewoo_data.price}}</p>
    <button class="add__button" @click="addToCart">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "lap-parts-daewoo",
        props: {
        daewoo_data: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart',this.daewoo_data);
        }
    }
};
</script>

<style>

</style>