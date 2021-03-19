<template>
  <div class="container-fluid mt-2">
    <div class="row justify-content-center">
      <div class="col-4">
        <h1>VIN Details</h1>
        <p>This will contact Ford.com with your VIN and order number.</p>
        <p><button class="btn btn-warning btn-sm" type="button" @click="showOrderHelp = !showOrderHelp">What's an order number?</button></p>
        <p v-if="showOrderHelp">This is a four or five character long string that represents the Mach-E order placed at the factory. Put in your VIN and a Window Sticker button will show up. Click on it and if a valid sticker shows up, look for the "ITEM #" field. Find the string: AA-<strong>BBBB</strong> O/T 1. Take the numbers in the "B" section and enter it as the order number.</p>
      </div>
      <div class="col-4">
        <form @submit.prevent="fetchVIN()">
          <div class="mb-3">
            <label for="inputVinNumber" class="form-label">VIN</label>
            <input id="inputVinNumber" v-model="inputVin" placeholder="1AABB12CDEF123456" pattern="[a-hj-npr-zA-HJ-NPR-Z0-9]{17}" type="text" class="form-control" maxlength="17" required style="text-transform:uppercase;" />
          </div>
          <div class="mb-3">
            <label for="inputOrder" class="form-label">Order Number</label>
            <input id="inputOrder" v-model="inputOrder" placeholder="1234" type="text" class="form-control" maxlength="17" required style="text-transform:uppercase;" />
          </div>
          <div class="mb-3">
            <p>
              <button type="submit" class="btn btn-primary me-2">Submit</button>
              <a v-if="inputVin" class="btn btn-info" :href="`https://www.windowsticker.forddirect.com/windowsticker.pdf?vin=${inputVin}`" target="_blank">Window Sticker</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10" v-if="errors">
        <h3 class="text-danger">Something's not right.</h3>
        <p>Ford didn't like the information it recieved. Are you sure you have the right VIN and order number combination?</p>
      </div>
      <div class="col-10" v-if="output">
        <vin-details-view :output="output" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VinDetailsView from '@/components/05_VinDetailsView'

export default {
  name: 'vin-details',
  components: {
    VinDetailsView
  },
  data () {
    return {
      inputVin: null,
      inputOrder: null,
      output: null,
      errors: null,
      showOrderHelp: false
    }
  },
  mounted () {
    if (!this.inputVin && this.$route.query.vin) {
      this.inputVin = this.$route.query.vin
    }
    if (!this.inputOrder && this.$route.query.order) {
      this.inputOrder = this.$route.query.order
    }
    if (this.inputVin && this.inputOrder) {
      this.fetchVIN()
    }
  },
  methods: {
    fetchVIN () {
      if (this.inputVin && this.inputOrder) {
        axios({
          url: 'https://shop.ford.com/aemservices/shop/vot/api/customerorder/',
          method: 'GET',
          params: {
            orderNumber: this.inputOrder.toUpperCase(),
            partAttributes: 'BP2.*',
            vin: this.inputVin.toUpperCase()
          }
        }).then((response) => {
          this.output = response.data[0]
          this.errors = null
        }).catch((errors) => {
          console.error(errors)
          this.output = null
          this.errors = errors
        })
      }
    }
  }
}
</script>
