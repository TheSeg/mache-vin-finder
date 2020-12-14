<template>
  <div class="row">
    <div class="col-10">
      <h2>Instructions</h2>
      <h3 class="h5">1. Open your Reservation in a new tab and log into your Ford account.</h3>
      <div v-if="this.$store.state.ordernumber">
        <p>Since you entered your order number, start here: <a :href="'https://www.ford.com/buy/mach-e/manage.html?reservationId=' + this.$store.state.ordernumber" target="_blank">https://www.ford.com/buy/mach-e/manage.html?reservationId={{this.$store.state.ordernumber}}</a></p>
        <p>You will need to log into your Ford account associated with your order, then you should return to the detailed reservation page.</p>
      </div>
      <div v-else>
        <p>Go to your Ford Reservation page to find your order: <a href="https://www.ford.com/buy/reservations/#/?gnav=header-account">https://www.ford.com/buy/reservations/#/?gnav=header-account</a></p>
        <p>You will need to log into your Ford account associated with your order. You should be able to return to the reservataion listing and select your Mach-E reservation. You can also put the order number in the above to update these instructions.</p>
      </div>
      <h3 class="h5">2. Check status of order.</h3>
      <div class="row">
        <div class="col">
          <p>Check to make sure your order is "Scheduled For Production" with a date. See the image as an example.</p>
        </div>
        <div class="col-5">
          <p><img src="../assets/ScheduledForProduction.png" class="img-thumbnail"></p>
        </div>
      </div>
      <h3 class="h5">3. Open Developer Tools.</h3>
      <p>For this step, we're going to open up your browser's developer tools. This will be different across different browser types, so please select the browser you wish to use.</p>
      <h3 class="h5">4. TODO</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instructions'
}
</script>
