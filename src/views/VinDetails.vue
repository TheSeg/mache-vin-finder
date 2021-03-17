<template>
  <div class="container-fluid mt-2">
    <div class="row justify-content-center">
      <div class="col-4">
        <h1>VIN Details</h1>
        <p><strong>This will contact Ford.com with your VIN number!</strong></p>
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center" v-if="output">
      <div class="col-10">
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
      output: null
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
        }).catch((errors) => {
          console.error(errors)
        })
      }
    }
  }
}
</script>
