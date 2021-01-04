<template>
  <div class="row justify-content-center">
    <div class="col-10 pb-5">
      <h2>Data Entry</h2>
      <form>
        <div class="mb-2">
          <label for="mainData" class="form-label">Paste the contents of the response inside this text box.</label>
          <textarea class="form-control" id="mainData" rows="3" v-model="this.textData"></textarea>
          <p v-if="errors" class="text-danger" v-html="errors"></p>
          <p v-else class="text-muted">Don't worry how it's formatted in this box.</p>
        </div>
        <div class="mb-2">
          <button type="button" class="btn btn-primary btn-lg" @click="processJSON">Process</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
#mainData {
  resize: none;
}
</style>

<script>
import { Modal } from 'bootstrap'

export default {
  name: 'Data',
  data () {
    return {
      textData: null,
      errors: false,
      myModal: null
    }
  },
  mounted () {
    this.myModal = new Modal(document.getElementById('finalDataModal'))
  },
  beforeUnmount () {
    this.myModal.hide()
  },
  methods: {
    processJSON (event) {
      this.errors = false
      try {
        const processed = JSON.parse(this.textData)
        if (processed) {
          this.$store.commit('updateMainData', processed)
          if (this.$store.state.foundVINS.length > 0) {
            this.myModal.show()
          } else {
            this.errors = 'While proper JSON, it doesn\t look like this data has a VIN number.'
          }
        } else {
          // Error times!
          this.errors = 'Sorry! That wasn\'t proper JSON content. Are you sure you copied the entire response text?'
        }
      } catch (error) {
        // Error times!
        this.errors = 'Sorry! That wasn\'t proper JSON content. Are you sure you copied the entire response text?'
      }
    }
  }
}
</script>
