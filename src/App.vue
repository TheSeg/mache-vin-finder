<template>
  <div>
    <nav class="navbar navbar-dark bg-primary sticky-top">
      <div class="container-fluid">
        <router-link :to="{ path: '/' }" v-slot="{ href }" custom>
          <a :href="href" class="navbar-brand">Ford Mach-E Reservation Details Viewer</a>
        </router-link>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
}
</style>
