<template>
  <div class="row justify-content-center">
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
      <div class="row justify-content-center">
        <div class="col">
          <p>Check to make sure your order is "Scheduled For Production" with a date.</p>
          <p>If your order is still waiting for a production date/week, you can not get your VIN number. It's assigned only when your car is scheduled for production.</p>
        </div>
        <div class="col-3">
          <p><img src="../assets/ScheduledForProduction.png" class="img-thumbnail"></p>
        </div>
      </div>

      <h3 class="h5">3. Open Developer Tools.</h3>
      <p>For this step, we're going to open up your browser's developer tools. These steps work for Chrome and Firefox unless noted.</p>
      <ol>
        <li>Hit the Keyboard shortcut of <code>F12</code> or on macOS, <code>FN + F12</code>
          <ul>
            <li>This will open the developer's pannel.</li>
          </ul>
        </li>
        <li>Find the "Network" tab in the developer's pannel.
          <ul>
            <li>You may have to click on a <code>&gt;&gt;</code> button to reveal the "Network" tab.</li>
          </ul>
        </li>
        <li>Click the <code>XHR</code> filter button.
          <ul>
            <li>This is in a row with buttons labled "All", "HTML", "CSS", "JS", etc.</li>
          </ul>
        </li>
      </ol>

      <h3 class="h5">4. Refresh the page.</h3>
      <p>With the network tools open, your browser will give detailed data of what is downloaded from the website. There's going to be a lot, so wait till the page finishes loading completely.</p>

      <h3 class="h5">5. Find the data payload.</h3>
      <p><em>This is the hard part.</em> There are a lot of entries in the network panel. We're looking for one that starts with your order number.</p>
      <ul class="list-unstyled">
        <li>
          <strong>Display:</strong> <code>{{ordernumber || 'XXXXXXXX'}}?lang=en_us</code>
        </li>
        <li>
          <strong>Full URL:</strong> <code>https://apigtw.ford.com/oneford/api/gep/USA/reservations/{{ordernumber || 'XXXXXXXX'}}?lang=en_us</code>
        </li>
        <li v-if="!ordernumber" class="text-muted">Replace the X's with your order number.</li>
      </ul>
      <p>When you find it, click on that entry once.</p>

      <h3 class="h5">6. Copy the response to this form.</h3>
      <p>A new pane should appear. One of the tabs inside this pane should be called <code>Response</code>. You may have to click on a <code>&gt;&gt;</code> button to reveal the option. Click the <code>Response</code> tab.</p>
      <p><em><strong>Note for Firefox:</strong></em> Next, expand the <code>Response Payload</code> section.</p>
      <p>You should see a long string of characters and text. <em>This is what we're looking for!</em></p>

      <ul>
        <li>Click once anywhere in this long block of text.</li>
        <li>Select all the contents by hitting <code>Ctrl-A</code> or <code>Command-A</code>.</li>
        <li>Copy the contents by hitting <code>Ctrl-C</code> or <code>Command-C</code>.</li>
      </ul>

      <h3 class="h5">7. Now paste the content in the box below!</h3>
      <ul>
        <li>Click the inside of the input box once.</li>
        <li>Hit the keys: <code>Ctrl-V</code> or <code>Command-V</code>.</li>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Instructions',
  computed: {
    ...mapState(['ordernumber'])
  }
}
</script>
