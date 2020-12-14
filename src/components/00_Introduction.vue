<template>
  <div class="row">
    <div class="col-10">
      <h1>Ford Mach-E Reservation Details Viewer</h1>
      <p>This is a tool helps obtain various information from your Mach-E reservation that is sent to your browser, but not displayed. Espeically the VIN number, if your order has a build week set.</p>
      <h2 class="text-danger">Disclaimers!</h2>
      <p><strong>This tool is not from Ford.</strong> I've done my best to preserve your privacy as much as possiable. After obtaining all the data from visiting this page, no data is sent from your browser to this or any other website. Not even analytics. That's why some of the steps are convoluted.</p>
      <p>The software that runs this site is <a href="https://github.com/TheSeg/mache-vin-finder" target="_blank">located on my GitHub</a>. If you're adventerous, you can run it on your computer yourself. <a href="https://github.com/TheSeg/mache-vin-finder/issues" target="_blank">I'm open to improvments</a>, but ultimately this site is AS-IS.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>
