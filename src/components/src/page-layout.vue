<template>
    <div class="page__layout">
        <lap-header/>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        <lap-footer/>
    </div>
</template>

<script>
import LapFooter from './lap-footer.vue'
import lapHeader from './lap-header.vue'

export default {
  components: { lapHeader,LapFooter,},
    name: 'page-layout'
}
</script>

<style>
</style>