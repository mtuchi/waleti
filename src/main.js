import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import vueCustomElement from 'vue-custom-element'
import App from './App.vue'
import store from './store/index'
import '@/assets/css/tailwind.css'

// widget setup
// (optional) 'Custom elements polyfill'
import 'document-register-element/build/document-register-element'
// vue-custom-element by karol-f
Vue.use(vueCustomElement)

Vue.use(VueTailwind)
Vue.config.productionTip = false

// new Vue is not needed anymore, as you're initializing the app through vue-custom-element
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// use vue-custom-element
App.store = store
// App.router = router
Vue.customElement('vue-widget', App)
