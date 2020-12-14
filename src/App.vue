<template>
  <div class="container-fluid">
    <Introduction />
    <Preperation />
    <Instructions />
    <Data />
    <Results v-if="mainData" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Introduction from './components/00_Introduction.vue'
import Preperation from './components/01_Preperation.vue'
import Instructions from './components/02_Instructions.vue'
import Data from './components/03_Data.vue'
import Results from './components/04_Results'

export default {
  name: 'App',
  components: {
    Introduction,
    Preperation,
    Instructions,
    Data,
    Results
  },
  computed: {
    ...mapState(['mainData'])
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
}
</style>
