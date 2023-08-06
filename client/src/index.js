import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from './views/HomeVue.vue'
import Signup from './components/Auth/Signup.vue'
import Login from './components/Auth/Login.vue'

const routes = [
  { path: '/', component: HomeVue },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(), //base url
  routes
})

export default router
