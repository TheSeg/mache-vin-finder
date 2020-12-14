<template>
  <div class="row">
    <div class="col-10">
      <h2>Data Entry</h2>
      <form>
        <div class="mb-2">
          <label for="mainData" class="form-label">Paste the contents of the response inside this text box.</label>
          <textarea class="form-control" id="mainData" rows="3" v-model="this.textData"></textarea>
          <div id="mainDataHelp" aria-describedby="mainDataHelp" class="form-text">It's OK to not see it all, just as long as it's a direct copy/paste of <em>all</em> the contents.</div>
        </div>
        <div class="mb-2">
          <button type="button" class="btn btn-primary btn-lg" @click="processJSON">Process</button>
          <!-- <button type="reset" class="btn btn-danger">Reset</button> -->
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
export default {
  name: 'Data',
  data () {
    return {
      textData: null
    }
  },
  methods: {
    processJSON (event) {
      console.info('Processing Stuff')
      const processed = JSON.parse(this.textData)
      if (processed) {
        this.$store.state.mainData = processed
      } else {
        // Error times!
      }
    }
  }
}
</script>
