import { createApp } from 'vue'

// import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/style.scss'
import { VuelidatePlugin } from '@vuelidate/core'

// import VueMask from 'v-mask'

const MyApp = createApp(App)
MyApp.use(store)
MyApp.use(router)
MyApp.use(VuelidatePlugin)

MyApp.directive('phone', {
  mounted (el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

      if (!x[2] && x[1] !== '') {
        this.value = x[1] === '8' ? x[1] : '8' + x[1]
      } else {
        this.value = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
      }
    }
  }
})

MyApp.config.devtools = true

MyApp.mount('#app')

// !Яндекс карты
// import YmapPlugin from 'vue-yandex-maps'

// const settings = {
//    apiKey: '0a85810d-f050-434c-ab6b-0851b6fda2a8',
//    lang: 'ru_RU',
//    coordorder: 'latlong',
//    version: '2.1'
// }
// MyApp.use(YmapPlugin, settings)
