<template>
  <div class="container-fluid mt-2">
    <Preperation />
    <hr>
    <Instructions />
    <hr>
    <Data />
    <Results v-show="mainData" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Preperation from '@/components/01_Preperation.vue'
import Instructions from '@/components/02_Instructions.vue'
import Data from '@/components/03_Data.vue'
import Results from '@/components/04_Results'

export default {
  name: 'App',
  components: {
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
