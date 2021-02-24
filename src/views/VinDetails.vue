<template>
  <div class="container-fluid mt-2">
    <div class="row justify-content-center">
      <div class="col-5">
        <h1>VIN Details</h1>
        <p><strong>This will contact Ford.com with your VIN number!</strong></p>
      </div>
      <div class="col-5">
        <form @submit.prevent="fetchVIN()">
        <div class="row justify-content-center">
          <div class="col-auto">
            <label for="inputVinNumber" class="col-form-label">VIN</label>
          </div>
          <div class="col-auto">
            <input id="inputVinNumber" v-model="inputVin" placeholder="1AABB12CDEF123456" pattern="[A-HJ-NPR-Z0-9]{17}" type="text" class="form-control form-control" maxlength="17" required />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
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
      output: null
    }
  },
  mounted () {
    if (!this.inputVin && this.$route.query.vin) {
      this.inputVin = this.$route.query.vin
    }
    if (this.inputVin) {
      this.fetchVIN()
    }
  },
  methods: {
    fetchVIN () {
      if (this.inputVin) {
        axios({
          url: 'https://shop.ford.com/aemservices/shop/vot/api/customerorder/',
          method: 'GET',
          params: {
            partAttributes: 'BP2.*',
            vin: this.inputVin
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
