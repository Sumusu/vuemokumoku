import Vue from 'vue'
import router from './routers/index.js'
import store from './repository/store.js'
import App from './App.vue'
import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic.js'


new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')