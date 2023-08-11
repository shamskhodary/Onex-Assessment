<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLogout } from '@mdi/js';
import swal from '../../helpers/swal'
import { useRouter } from 'vue-router';

import "./Navbar.css";

const path = ref(mdiLogout);
const username = ref("");
const router = useRouter()

const user = JSON.parse(localStorage.getItem("user"))
username.value = `${user.firstName} ${user.lastName}`


async function handleLogout () {
  localStorage.removeItem("token")
  swal("success", "You are logged out")
  router.push('/login')
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
      <svg-icon type="mdi" :path="path" @click="handleLogout" style="cursor: pointer;" ></svg-icon>
  </div>
     
    </v-app-bar>

</template>