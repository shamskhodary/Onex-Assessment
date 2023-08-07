<script setup>
import { ref } from 'vue'
import './Auth.css'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()

const rules = [
  (value) => {
    if (value) return true

    return 'This field is required'
  }
]
async function handleSignup() {
  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  }
  loading.value = true
  const { data } = await axios.post('/api/v1/auth/signup', userData)
  loading.value = false

  if (data.status === 'err') {
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
      icon: 'error',
      title: data.message
    })
  } else {
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
    loading.value = true
    router.push('/')
  }
}
</script>

<template>
  <div class="signup-container">
    <v-card class="signup-form">
      <v-card-title>
        <h1>Signup</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="firstName" @keyup.enter="handleSignup" label="First name" :rules="rules"></v-text-field>
          <v-text-field v-model="lastName" label="Last name" @keyup.enter="handleSignup" :rules="rules"></v-text-field>
          <v-text-field v-model="email" label="Email" @keyup.enter="handleSignup" :rules="rules"></v-text-field>
          <v-text-field
            v-model="password"
            type="Password"
            label="Password"
            @keyup.enter="handleSignup"
            :rules="rules"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-title>
        <router-link to="/login"><span>Already have a user ?</span></router-link>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="handleSignup" :loading="loading" class="btn">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
