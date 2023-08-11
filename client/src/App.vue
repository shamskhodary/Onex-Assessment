<script setup>
import { onMounted } from "vue";
import "../main.css"
import { setHeaders } from "./api";

onMounted(() => {
      setHeaders();
    });
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
