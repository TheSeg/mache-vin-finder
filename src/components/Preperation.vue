<template>
  <div class="row">
    <div class="col-10">
      <h2>Preperation</h2>
      <p><strong>Keep this tab open!</strong> You'll be flipping between this tab and your reservation page.</p>
      <p>We're going to be using your browser's developer tools in order to get a payload of data. The tools may be something new to you, but follow along with the instructions and you'll be fine.</p>
      <div class="mb-3">
        <label for="browserInput" class="form-label">Browser Make</label>
        <select class="form-control" id="browserInput" aria-describedby="browserInputHelp" v-model="this.$store.state.selectedBrowser">
          <option v-for="option in browserOptions" :value="option.value" :key="option.value">{{ option.text }}</option>
        </select>
        <div id="browserInputHelp" class="form-text">I'll adjust the instructions based on what browser you're using. If yours isn't listed, then I don't have specific instructions for you yet.</div>
      </div>
      <div class="mb-3">
        <label for="orderNumberInput" class="form-label">Mach-E Reservation Order Number</label>
        <input type="number" class="form-control" id="orderNumberInput" aria-describedby="orderNumberInputHelp" v-model="this.$store.state.ordernumber" placeholder="XXXXXXXX">
        <div id="orderNumberInputHelp" class="form-text">Not required, but it helps make the instructions easier.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preperation',
  data () {
    return {
      browserOptions: [
        {
          text: 'Chrome',
          value: 'chrome'
        },
        {
          text: 'FireFox',
          value: 'firefox'
        }
      ]
    }
  }
}
</script>
