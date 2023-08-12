<script setup>
import Dashboard from '../components/Dashboard/DashboardVue.vue';
import { ref } from 'vue';
import axios from 'axios';

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLogout } from '@mdi/js'
import swal from '../helpers/swal'
import { useRouter } from 'vue-router'
import './Navbar.css'

const path = ref(mdiLogout)
const username = ref('')
const router = useRouter()

const user = JSON.parse(localStorage.getItem('user'))
username.value = `${user.firstName} ${user.lastName}`
const books = ref([])
const searchQuery =  ref('')

async function allBooks() {
  try {
    const { data } = await axios.get('/api/v1/books', {
        params: {
            q: searchQuery.value
        }
    })

    const allInfo = data.map((x) => ({ ...x, expanded: false, popup: false }))
    books.value = allInfo

} catch (error) {
    books.value = []
  }
}

async function handleLogout() {
  localStorage.removeItem('token')
  swal('success', 'You are logged out')
  router.push('/login')
}


</script>

<template>
    <v-app-bar :elevation="11" style="position: relative">
      <router-link to="/">
        <v-app-bar-title class="title">Booknex</v-app-bar-title>
      </router-link>
    <div class="search-input">
      <v-text-field label="search" v-model="searchQuery" @input="allBooks"></v-text-field>
    </div>
    <div class="user-info">
      <p>{{ username }}</p>
      <svg-icon type="mdi" :path="path" @click="handleLogout" style="cursor: pointer"></svg-icon>
    </div>
  </v-app-bar>
    <Dashboard :allBooks="allBooks" :books="books"/>
</template>