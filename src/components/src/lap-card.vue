<template>
    <div class="lap__cards">
        <div class="lap__card">
        <img class="lap__card-image" :src="require('../../assets/lap-card/' + product_data.image)" alt="product-card">
        <p class="lap__card-name">{{product_data.name}}</p>
    </div>
</div>
</template>
<script>
export default {
    name : 'lap-card',
    props: {
        product_data: {
            type: Object,
            default() {
                return{}
            }
        }
    }
}
</script>
<style>
.lap__cards {
 padding: 15px 55px 0px;
}
.lap__card{
    box-shadow: 0 0 8px 0;
    padding: 15px;
    margin-bottom: 25px;
    width: 200px;
}
.lap__card-name {
    color: #FDFDFD;
    background: #E83C26;
    border-radius: 4px;
    padding: 15px 0px 15px;
    box-sizing: border-box;
    text-align: center;
}
.lap__card-image{
    height: 210px;
    width: 210px;
}
</style>