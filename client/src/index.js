import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from './views/HomeVue.vue'
import Signup from './components/Auth/SignupVue.vue'
import Login from './components/Auth/LoginVue.vue'
import axios from 'axios'

async function userMe() {
  try {
    const { data } = await axios.get('/api/v1/auth')
    console.log(data.user)
  } catch (error) {
    console.log(error)
  }
}

userMe()

const routes = [
  { path: '/', component: HomeVue },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
