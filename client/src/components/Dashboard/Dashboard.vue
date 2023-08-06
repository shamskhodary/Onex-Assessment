<script setup>
import "./Dashboard.css"
import axios from 'axios'
import {onMounted} from 'vue'

const fetchData = async() => {
  const data = await axios.get('/api/v1/hello')
  console.log(data)
}
onMounted(() => {
  fetchData()

})
</script>

<template>
  <div class="dash">
    <p>dashboard</p>
  </div>
</template>