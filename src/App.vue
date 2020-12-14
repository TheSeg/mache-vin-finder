<template>
  <div class="container-fluid">
    <Introduction />
    <Preperation />
    <Instructions />
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue'
import Preperation from './components/Preperation.vue'
import Instructions from './components/Instructions.vue'

export default {
  name: 'App',
  components: {
    Introduction,
    Preperation,
    Instructions
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
}
</style>
