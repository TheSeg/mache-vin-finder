import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      ordernumber: null,
      mainData: null,
      foundVINS: []
    }
  },
  mutations: {
    updateMainData (state, mainData) {
      state.mainData = mainData
      state.foundVINS = []
      if (state.mainData.entries) {
        state.mainData.entries.forEach((entry) => {
          if (entry.product.vin) {
            state.foundVINS.push(entry.product.vin)
          }
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
