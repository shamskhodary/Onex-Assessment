import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from './views/HomeVue.vue'
import Signup from './components/Auth/SignupVue.vue'
import Login from './components/Auth/LoginVue.vue'

const routes = [
  { path: '/', component: HomeVue, meta: { isAuth: true } },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
