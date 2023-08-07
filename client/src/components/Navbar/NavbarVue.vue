<script setup>
import { ref, inject } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLogout } from '@mdi/js';
import "./Navbar.css";



const path = ref(mdiLogout);
const auth = inject('user');
const username = ref('sss');


username.value =`${auth.info.firstName} ${auth.info.lastName}`

async function handleLogout () {
  const {data, status} = await axios.post('/api/v1/auth/signout')
  if(status === 200) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: data.message
    })
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