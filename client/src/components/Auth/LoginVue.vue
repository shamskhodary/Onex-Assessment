<script setup>
import { ref } from 'vue'
import './Auth.css'
import axios from 'axios'
import swal from '../../helpers/swal'

import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()

async function handleLogin() {
  const userData = {
    email: email.value,
    password: password.value
  }

  loading.value = true
  const { data } = await axios.post('/api/v1/auth/signin', userData)
  loading.value = false

  if (data.status === 'err') {
    swal("error", data.message)
  } else {
    swal("success", data.message)
    loading.value = true
    router.push('/')
  }
}

const rules = [
  (value) => {
    if (value) return true

    return 'This field is required'
  }
]
</script>

<template>
  <div class="signup-container">
    <v-card class="signup-form">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            @keyup.enter="handleLogin"
            v-model="email"
            label="Email"
            :rules="rules"
          ></v-text-field>

          <v-text-field
            @keyup.enter="handleLogin"
            v-model="password"
            type="Password"
            label="Password"
            :rules="rules"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-title>
        <router-link to="/signup"><span>Create a new user</span></router-link>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn class="btn" :loading="loading" @click="handleLogin">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
