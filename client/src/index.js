import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from './views/HomeVue.vue'
import Signup from './components/Auth/SignupVue.vue'
import Login from './components/Auth/LoginVue.vue'

const routes = [
  { path: '/', component: HomeVue },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup']
  const auth = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if (auth && !loggedIn) {
    return next('/login')
  }

  next()
})
export default router
