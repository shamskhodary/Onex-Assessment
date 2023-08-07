import { createApp } from 'vue'
import router from './index.js'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App).use(vuetify).use(router).use(VueSweetalert2)

app.mount('#app')
