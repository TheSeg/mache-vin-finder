<template>
  <div class="container-fluid mt-2">
    <div class="row justify-content-center">
      <div class="col-10">
        <h2>Show Your VIN</h2>
        <p>Have you VIN? Enter it here and I'll give you the barcode. Use it to scan your VIN on your phone!</p>
        <p><strong>Note:</strong> No validation is done beyond checking the basic pattern for a 17 characters.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 mb-3">
        <label for="inputVinNumber" class="form-label">VIN Number</label>
        <input id="inputVinNumber" v-model="inputVin" placeholder="1AABB12CDEF123456" pattern="[A-HJ-NPR-Z0-9]{17}" type="text" class="form-control form-control-lg" maxlength="17" required />
      </div>
    </div>
    <div class="row justify-content-center mt-5" v-show="inputVin.length === 17">
      <div class="col-10">
        <div class="card text-dark">
          <div class="card-body text-center p-4">
            <svg class="barcode img-fluid" jsbarcode-format="CODE128" jsbarcode-displayvalue="true" :jsbarcode-value="inputVin"></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import JsBarcode from 'jsbarcode'

export default {
  name: 'ShowVIN',
  computed: {
    ...mapState([
      'foundVINS'
    ])
  },
  data () {
    return {
      inputVin: ''
    }
  },
  mounted () {
    JsBarcode('.barcode').init()
  },
  updated () {
    JsBarcode('.barcode').init()
  }
}
</script>
