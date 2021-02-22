<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>{{ output.year }} {{ output.make }} {{ output.vehicleLineDescription }} ({{ output.trim }}) <span class="h3 text-info">{{ checkDaysToDelivery() }}</span></h2>
      </div>
    </div>
    <ul class="nav nav-tabs justify-content-center bg-dark text-light" id="vin-details" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">General</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="dealer-tab" data-bs-toggle="tab" data-bs-target="#dealer" type="button" role="tab" aria-controls="dealer" aria-selected="true">Dealer</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="model-tab" data-bs-toggle="tab" data-bs-target="#model" type="button" role="tab" aria-controls="model" aria-selected="true">Model</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="accessories-tab" data-bs-toggle="tab" data-bs-target="#accessories" type="button" role="tab" aria-controls="accessories" aria-selected="true">Accessories</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="packages-tab" data-bs-toggle="tab" data-bs-target="#packages" type="button" role="tab" aria-controls="packages" aria-selected="true">Packages</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="interior-tab" data-bs-toggle="tab" data-bs-target="#interior" type="button" role="tab" aria-controls="interior" aria-selected="true">Interior</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="exterior-tab" data-bs-toggle="tab" data-bs-target="#exterior" type="button" role="tab" aria-controls="exterior" aria-selected="true">Exterior</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="other-tab" data-bs-toggle="tab" data-bs-target="#other" type="button" role="tab" aria-controls="other" aria-selected="true">Other</button>
      </li>
    </ul>
    <div class="tab-content" id="vin-details-content">
      <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
        <table class="table bg-dark text-light">
          <tbody>
            <tr>
              <td>ID#</td>
              <td>{{ output.id }}</td>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td>{{ output.customerName }}</td>
            </tr>
            <tr>
              <td>Receipt Date</td>
              <td>
                <div v-if="output.receiptDate">
                  {{ parseDate(output.receiptDate) }}
                </div>
                <div v-else>
                  N/A
                </div>
              </td>
            </tr>
            <tr>
              <td>Production Date</td>
              <td>
                <div v-if="output.productionDate">
                  {{ parseDate(output.productionDate) }}
                </div>
                <div v-else>
                  N/A
                </div>
              </td>
            </tr>
            <tr>
              <td>Shipment Date</td>
              <td>
                <div v-if="output.shipmentDate">
                  {{ parseDate(output.shipmentDate) }}
                </div>
                <div v-else>
                  N/A
                </div>
              </td>
            </tr>
            <tr>
              <td>Transit Date</td>
              <td>
                <div v-if="output.transitDate">
                  {{ parseDate(output.transitDate) }}
                </div>
                <div v-else>
                  N/A
                </div>
              </td>
            </tr>
            <tr>
              <td>Final Delivered Date</td>
              <td>
                <div v-if="output.finalDeliveredDate">
                  {{ parseDate(output.finalDeliveredDate) }}
                </div>
                <div v-else>
                  N/A
                </div>
              </td>
            </tr>
            <tr>
              <td>ETA End Date</td>
              <td>
                <div v-if="!output.etaEndDate || output.etaEndDate == '1990-01-01'">
                  N/A
                </div>
                <div v-else>
                  {{ parseDate(output.etaEndDate) }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="dealer" role="tabpanel" aria-labelledby="dealer-tab">
        Dealer
      </div>
      <div class="tab-pane fade" id="model" role="tabpanel" aria-labelledby="model-tab">
        Model
      </div>
    </div>
    <pre>{{ output }}</pre>
  </div>
</template>

<script>
import Tab from 'bootstrap/js/src/tab'

export default {
  name: '05-vin-details',
  props: {
    output: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      daysToDelivery: null,
      stagesFinished: {
        inProcessing: true,
        inProduction: false,
        delivered: false,
        awaitingShipment: false,
        inTransit: false
      }
    }
  },
  mounted () {
    const triggerTabList = [].slice.call(document.querySelectorAll('vin-details button'))

    triggerTabList.forEach(function (triggerEl) {
      const tabTrigger = new Tab(triggerEl)

      triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
      })
    })

    this.setStagesFinished()
  },
  methods: {
    parseDate (inputDate) {
      if (!inputDate) {
        return null
      }
      const normalizedDate = new Date(inputDate)

      return normalizedDate.toLocaleDateString(
        'en-us',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      )
    },
    getDaysToDelivery (etaEndDate) {
      const deliveryDate = new Date(etaEndDate);
      const today = new Date()
      const timeDiff = Math.abs(deliveryDate.getTime() - today.getTime())
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
      return diffDays
    },
    checkDaysToDelivery () {
      let status = null
      const daysToDelivery = this.getDaysToDelivery(this.output.etaEndDate)
      if (daysToDelivery < 0 || daysToDelivery > 712) {
        status = `is "${this.output.primaryStatus}"`
        this.daysToDelivery = 'N/A'
      } else if (this.output) {
        if (new Date(this.output.etaEndDate).getFullYear() < (new Date().getFullYear())) {
          status = `is "${this.currentStatus}".`
          this.daysToDelivery = 'N/A'
        } else {
          status = `is estimated to be delivered to ${this.output.custOrderDealer.dealerName} in <strong>${this.daysToDelivery} days.</strong> `
        }
      }
      return status
    },
    setStagesFinished () {
      // this.stagesFinished
      switch (this.output.primaryStatus) {
        case 'Delivered' :
          this.stagesFinished.delivered = true
          this.stagesFinished.inTransit = true
          this.stagesFinished.awaitingShipment = true
          this.stagesFinished.inProduction = true
          this.stagesFinished.inProcessing = true
          this.mtxOrderStatus = 'delivered'
          break
        case 'In Transit':
          this.stagesFinished.awaitingShipment = true
          this.stagesFinished.inProduction = true
          this.stagesFinished.inProcessing = true
          this.mtxOrderStatus = 'in transit'
          break
        case 'Awaiting Shipment':
          this.stagesFinished.inProduction = true
          this.stagesFinished.inProcessing = true
          this.mtxOrderStatus = 'awaiting shipment'
          break
        case 'In Order Processing':
          this.mtxOrderStatus = 'processing'
          break
        case 'In Production':
          this.mtxOrderStatus = 'production'
          break
      }
    }
  }
}
</script>
