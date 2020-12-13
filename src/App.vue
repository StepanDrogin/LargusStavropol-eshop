<template>
  <div id="app">
    <lap-header/>
    <lap-nav/>
    <lap-main-wrapper/>
    <lap-footer/>
  </div>
</template>

<script>
import LapMainWrapper from './components/lap-main-wrapper.vue'
import LapFooter from './components/src/lap-footer.vue'
import LapHeader from './components/src/lap-header'
import LapNav from './components/src/lap-nav.vue'
export default {
  name: 'App',
  components: {
    LapHeader,
    LapNav,
    LapMainWrapper,
    LapFooter,
  }
}
</script>

<style>
</style>
