<script setup>
import { ref, inject } from 'vue'
import axios from 'axios';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLogout } from '@mdi/js';
import swal from '../../helpers/swal'
import { useRouter } from 'vue-router';

import "./Navbar.css";



const path = ref(mdiLogout);
const auth = inject('user');
const username = ref('sss');
const router = useRouter()

console.log(auth.info)
username.value =`${auth.info?.firstName} ${auth.info?.lastName}`

async function handleLogout () {
  const {data, status} = await axios.post('/api/v1/auth/signout')
  if(status === 200) {
    swal("success", data.message)
    router.push('/login')
  }
}
</script>

<template>
    <v-app-bar :elevation="11" style="position: relative">
      <v-app-bar-title class="title">Booknex</v-app-bar-title>
      <div class="search-input">
    <v-text-field
      label="search"
    ></v-text-field>
  </div>
  <div class="user-info">
    <p>{{ username }}</p>
      <svg-icon type="mdi" :path="path" @click="handleLogout"></svg-icon>
  </div>
     
    </v-app-bar>

</template>