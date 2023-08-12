<script setup>
import swal from '../../helpers/swal'
import axios from 'axios'
import { ref } from 'vue'

const popup = ref(false)
const title = ref('')
const author = ref('')
const description = ref('')
const imageUrl = ref('')
const pages = ref()

const emit = defineEmits(['books-changed'])


async function handleAddBook() {
  popup.value = false
  const bookInfo = {
    title: title.value,
    author: author.value,
    description: description.value,
    imageUrl: imageUrl.value,
    pages: pages.value
  }

  const { data } = await axios.post('/api/v1/books', bookInfo)
  if (data.status === 'err') {
    popup.value = true
    swal('error', data.message)
  } else {
    swal('success', data.message)
    emit('books-changed')

    title.value = "",
    author.value = "",
    description.value ="",
    imageUrl.value ="",
    pages.value =""
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
  <v-dialog v-model="popup" activator="parent" width="auto">
    <v-card style="text-align: center; padding-top: 1rem">
      <v-card-title>
        <h2>Add a new book</h2>
      </v-card-title>
      <v-form @submit.prevent>
        <v-text-field v-model="title" :rules="rules" label="Title"></v-text-field>
        <v-text-field v-model="author" :rules="rules" label="Author"></v-text-field>
        <v-text-field v-model="description" :rules="rules" label="Description"></v-text-field>
        <v-text-field v-model="imageUrl" :rules="rules" label="Image Link"></v-text-field>
        <v-text-field v-model="pages" :rules="rules" label="Pages"></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn color="rgb(13, 214, 184)" @click="handleAddBook">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
