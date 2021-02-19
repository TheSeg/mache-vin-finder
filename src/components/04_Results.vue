<template>
  <div class="modal fade" id="finalDataModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Data Results</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="foundVINS">
            <div v-for="entry in foundVINS" :key="entry">
              <div class="text-center">
                <h2 class="text-center"><code class="user-select-all" v-html="entry"></code></h2>
              </div>
              <div class="px-2 my-3 text-center">
                <svg class="barcode img-fluid" jsbarcode-format="CODE128" jsbarcode-displayvalue="false" :jsbarcode-value="entry"></svg>
              </div>
            </div>
            <div class="text-center">
              <p class="fw-light">Use the barcode to scan your VIN number into the FordPass&reg; app.</p>
              <p class="h3">Enjoy your Ford Mustang Mach-E!</p>
            </div>
          </div>
          <div v-else>
            Still need proper data.
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import JsBarcode from 'jsbarcode'

export default {
  name: 'Results',
  computed: {
    ...mapState([
      'foundVINS'
    ])
  },
  mounted () {
    JsBarcode('.barcode').init()
  },
  updated () {
    JsBarcode('.barcode').init()
  }
}
</script>
