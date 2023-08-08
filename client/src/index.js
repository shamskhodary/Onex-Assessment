import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from './views/HomeVue.vue'
import Signup from './components/Auth/SignupVue.vue'
import Login from './components/Auth/LoginVue.vue'
import { fetchUser } from './context/authContext'

const routes = [
  { path: '/', component: HomeVue, meta: { isAuth: true } },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isAuth && !fetchUser()) {
    next('/login')
  } else {
    next()
  }
})

export default router
