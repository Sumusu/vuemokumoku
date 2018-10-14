import Vue from 'vue'
import Vuex from 'vuex'
// import API from '../api'
import StoreKey from '../constant/storeKey'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleData: '',
  },
  mutations: {
    [StoreKey.SAMPLE_KEYS]: function (state, val) {
      this.state.sampleData = val;
    },
  },
  getters: {
    foo : state => {
      return 0
    }
  },
  actions: {
    [StoreKey.SAMPLE_KEYS]: function (context, val) {
      return new Promise((res, rej) => {
        API.Employee.get(val)
        .then(list => {
          context.commit(StoreKey.SAMPLE_KEYS, list)
          res(res)
          })
      .catch(rej)
      })
    },
  },
});
