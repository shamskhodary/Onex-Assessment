import { createApp } from 'vue'
import router from './index.js'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App).use(vuetify).use(router)

app.mount('#app')
