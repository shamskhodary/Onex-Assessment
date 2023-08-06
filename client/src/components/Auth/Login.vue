<script setup>
import { ref } from 'vue';
import './Auth.css'

const email = ref("");
const password = ref("");

const rules = [
  (value) => {
    if (value) return true;

    return "This field is required"
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
        <v-form @submit.prevent>
          <v-text-field 
            v-model="firstName"
            label="First name"
            :rules="rules"
          ></v-text-field>

          <v-text-field
          v-model="lastName" 
            label="Last name"
            :rules="rules"
          ></v-text-field>

          <v-text-field 
          v-model="email"
            label="Email"
            :rules="rules"
          ></v-text-field>

          <v-text-field 
            v-model="password"
            type="Password"
            label="Password"
            :rules="rules"
          ></v-text-field>

        </v-form>
      </v-card-text>
      <v-card-title>
       <span>Create a new user</span>
        
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn class="btn">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
 
</template>



