<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <h2>Preperation</h2>
      <p>We're going to be using your <em>desktop or laptop</em> browser's developer tools in order to get a payload of data. The tools may be something new to you, but follow along with the instructions and you'll be fine.</p>
      <h3>Keep this tab open!</h3>
      <p>You'll be flipping between this tab and your reservation page.</p>
      <h3>Reservation Number</h3>
      <p>If you want to make this easier, put in your Order Number in the field below.</p>
      <div class="mb-3">
        <label for="orderNumberInput" class="form-label">Mach-E Reservation Order Number</label>
        <input type="number" class="form-control" id="orderNumberInput" aria-describedby="orderNumberInputHelp" v-model="this.$store.state.ordernumber" placeholder="XXXXXXXX">
        <div id="orderNumberInputHelp" class="form-text">This entire tool works in your browser so your data stays in your browser.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preperation'
}
</script>
