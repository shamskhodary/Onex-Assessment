import { createApp, reactive } from 'vue'
import router from './index.js'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import axios from 'axios'

const vuetify = createVuetify({
  components,
  directives
})

const userData = reactive({
  info: null
})

async function fetchUser() {
  try {
    const { data } = await axios.get('/api/v1/auth')
    userData.info = data.user
  } catch (error) {
    userData.info = null
  }
}
fetchUser().then(() => {
  const app = createApp(App).use(vuetify).use(router).use(VueSweetalert2)

  app.provide('user', userData)

  app.mount('#app')
})
