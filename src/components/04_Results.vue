<template>
  <div class="row">
    <div class="col-10">
      <h2>Results</h2>
      <div v-if="mainData">
        <h3>Success!</h3>
        <table class="table" v-for="(entry) in mainData.entries" :key="entry.product.code">
          <tbody>
            <tr>
              <th>VIN</th>
              <td class="h5"><code class="user-select-all" v-html="entry.product.vin"></code></td>
            </tr>
            <tr>
              <th>VIN barcode:</th>
              <td>
                <svg class="barcode" jsbarcode-format="CODE128" jsbarcode-displayvalue="false" :jsbarcode-value="entry.product.vin"></svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        Still need proper data.
      </div>
    </div>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode'
import { mapState } from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapState(['mainData'])
  },
  mounted () {
    console.info('mounted')
    JsBarcode('.barcode').init()
  },
  updated () {
    console.info('updated')
    JsBarcode('.barcode').init()
  }
}
</script>
