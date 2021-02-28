<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>{{ output.year }} {{ output.make }} {{ output.vehicleLineDescription }} ({{ output.trim }}) <span class="h3 text-info" v-html="checkDaysToDelivery()"></span></h2>
      </div>
      <div v-if="output.status" class="col-12">
        <h3>{{ output.status }}</h3>
      </div>
      <div v-if="output.windowSticker" class="col-12">
        <p><a class="btn btn-info" :href="'https://www.windowsticker.forddirect.com/windowsticker.pdf?vin=' + output.vin" target="_blank">Window Sticker</a></p>
      </div>
    </div>
    <ul class="nav nav-pills nav-fill text-light" id="vin-details" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">General</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="dealer-tab" data-bs-toggle="tab" data-bs-target="#dealer" type="button" role="tab" aria-controls="dealer" aria-selected="true">Dealer</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="model-tab" data-bs-toggle="tab" data-bs-target="#model" type="button" role="tab" aria-controls="model" aria-selected="true">Model</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="accessories-tab" data-bs-toggle="tab" data-bs-target="#accessories" type="button" role="tab" aria-controls="accessories" aria-selected="true">Accessories</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="packages-tab" data-bs-toggle="tab" data-bs-target="#packages" type="button" role="tab" aria-controls="packages" aria-selected="true">Packages</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="interior-tab" data-bs-toggle="tab" data-bs-target="#interior" type="button" role="tab" aria-controls="interior" aria-selected="true">Interior</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="exterior-tab" data-bs-toggle="tab" data-bs-target="#exterior" type="button" role="tab" aria-controls="exterior" aria-selected="true">Exterior</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-light" id="other-tab" data-bs-toggle="tab" data-bs-target="#other" type="button" role="tab" aria-controls="other" aria-selected="true">Other</button>
      </li>
    </ul>
    <div class="tab-content" id="vin-details-content">

      <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
        <table class="table text-light">
          <tbody>
            <tr>
              <td>ID#</td>
              <td>{{ output.id.trim() }}</td>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td>{{ output.customerName }}</td>
            </tr>
            <tr>
              <td>Group Order Type</td>
              <td>{{ output.groupOrderType }}</td>
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

      <div class="tab-pane fade p-3" id="dealer" role="tabpanel" aria-labelledby="dealer-tab">
        <h3>{{ output.custOrderDealer.dealerName }}</h3>
        <div class="row">
          <div class="col">
            <address>
              {{ output.custOrderDealer.custOrderDealerAddress.address1 }}<br>
              <span v-if="output.custOrderDealer.custOrderDealerAddress.address2">{{ output.custOrderDealer.custOrderDealerAddress.address2}}<br></span>
              <span v-if="output.custOrderDealer.custOrderDealerAddress.address3">{{ output.custOrderDealer.custOrderDealerAddress.address3}}<br></span>
              {{ output.custOrderDealer.custOrderDealerAddress.city }}, {{ output.custOrderDealer.custOrderDealerAddress.state }} {{ output.custOrderDealer.custOrderDealerAddress.postalCode}}<br>
              {{ output.custOrderDealer.custOrderDealerAddress.country }}
            </address>
          </div>
          <div class="col">
            <ul>
              <li v-if="output.custOrderDealer.dealerUrl"><a :href="output.custOrderDealer.dealerUrl" target="_blank">Website</a></li>
              <li v-if="output.custOrderDealer.dealerEmail"><a :href="'mailto:' + output.custOrderDealer.dealerEmail">Email</a></li>
              <li v-if="output.custOrderDealer.dealerTelephone"><a :href="'tel:' + parseTel(output.custOrderDealer.dealerTelephone)">{{ output.custOrderDealer.dealerTelephone }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tab-pane fade p-3" id="model" role="tabpanel" aria-labelledby="model-tab">
        <cust-order-parts-info :rootObject="output.custOrderPartsInfo['Model Information']" />
      </div>

      <div class="tab-pane fade p-3" id="accessories" role="tabpanel" aria-labelledby="accessories-tab">
        <cust-order-parts-info :rootObject="output.custOrderPartsInfo.Accessories" />
      </div>

      <div class="tab-pane fade p-3" id="packages" role="tabpanel" aria-labelledby="packages-tab">
        <cust-order-parts-info :rootObject="output.custOrderPartsInfo.Packages" />
      </div>

      <div class="tab-pane fade p-3" id="interior" role="tabpanel" aria-labelledby="interior-tab">
        <cust-order-parts-info :rootObject="output.custOrderPartsInfo.Interior" />
      </div>

      <div class="tab-pane fade p-3" id="exterior" role="tabpanel" aria-labelledby="exterior-tab">
        <cust-order-parts-info :rootObject="output.custOrderPartsInfo.Exterior" />
      </div>

      <div class="tab-pane fade p-3" id="other" role="tabpanel" aria-labelledby="other-tab">
        <cust-order-parts-info :rootObject="output.custOrderPartsInfo.Other" />
      </div>

    </div>
    <div>
      <button class="btn btn-secondary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
        Show Raw Details
      </button>
      <div class="collapse p-3" id="collapseExample">
        <pre>{{ output }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from 'bootstrap/js/src/tab'
import Collapse from 'bootstrap/js/src/collapse'
import CustOrderPartsInfo from './subcomponents/custOrderPartsInfo'

export default {
  name: '05-vin-details',
  components: {
    CustOrderPartsInfo
  },
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

    const collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    collapseElementList.map((collapseEl) => {
      return new Collapse(collapseEl, {
        toggle: false
      })
    })

    this.setStagesFinished()
  },
  methods: {
    parseDate (inputDate) {
      if (!inputDate) {
        return null
      }
      const normalizedDate = new Date(inputDate + 'T00:00:00')

      return normalizedDate.toLocaleDateString(
        'en-us',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      )
    },
    parseTel (inputTel) {
      return inputTel.replace(/\D/g, '')
    },
    getDaysToDelivery (etaEndDate) {
      const deliveryDate = new Date(etaEndDate + 'T00:00:00')
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
          status = `is estimated to be delivered to dealer in <strong>${daysToDelivery} days.</strong> `
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
