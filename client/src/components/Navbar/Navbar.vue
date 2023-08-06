<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import "./Navbar.css";
import { mdiLogout } from '@mdi/js';

const path = ref(mdiLogout);
const username = ref('shams');

</script>

<template>
    <v-app-bar :elevation="11">
      <v-app-bar-title class="title">Booknex</v-app-bar-title>
      <div class="search-input">
    <v-text-field
      label="search"
    ></v-text-field>
  </div>
  <div class="user-info">
    <p>{{ username }}</p>
      <svg-icon type="mdi" :path="path"></svg-icon>
  </div>
     
    </v-app-bar>

</template>