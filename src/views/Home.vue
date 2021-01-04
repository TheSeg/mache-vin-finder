<template>
  <div class="row justify-content-center">
    <Introduction />
    <div class="row justify-content-center">
      <div class="col-5">
        <router-link :to="{ path: 'findvin' }" v-slot="{ href }" custom>
          <div class="card text-light border-info bg-dark p-2">
            <div class="card-body">
              <h5 class="card-title">Find Your VIN</h5>
              <p class="card-text"><strong>If you have a scheduled build week,</strong> use this tool to extract the VIN from your data.</p>
              <a class="btn btn-primary" :href="href">Find Your VIN</a>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-5">
        <router-link :to="{ path: 'show' }" v-slot="{ href }" custom>
          <div class="card text-light border-info bg-dark p-2">
            <div class="card-body">
              <h5 class="card-title">VIN Barcode</h5>
              <p class="card-text">Have your VIN? This tool will render a barcode you can use to scan your VIN directly to your FordPass&reg; app.</p>
              <a class="btn btn-primary" :href="href">VIN Barcode</a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Introduction from '@/components/00_Introduction.vue'

export default {
  name: 'Home',
  components: {
    Introduction
  }
}
</script>
