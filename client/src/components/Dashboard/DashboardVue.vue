<script setup>
import { onMounted, ref } from 'vue'
import './Dashboard.css'
import axios from 'axios'
import './Dashboard.css'
import swal from '../../helpers/swal'

const books = ref([])
const show = ref(false)
const popup = ref(false)
const title = ref('')
const author = ref('')
const description = ref('')
const imageUrl = ref('')
const pages = ref(0)

async function allBooks() {
  try {
    const { data } = await axios.get('/api/v1/books')
    books.value = data
  } catch (error) {
    books.value = []
  }
}
onMounted(() => {
  allBooks()
})

const rules = [
  (value) => {
    if (value) return true

    return 'This field is required'
  }
]

async function handleAddBook() {
  popup.value = false
  try {
    const bookInfo = {
      title: title.value,
      author: author.value,
      description: description.value,
      imageUrl: imageUrl.value,
      pages: pages.value
    }

    const {data, status} = await axios.post('/api/v1/books', bookInfo)
    if(status === 200){
      swal('success', data.message)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="dash">
    <v-card>
      <v-tabs>
        <v-tab>My Book List</v-tab>
        <v-btn class="add-btn"
          >Add book
          <v-dialog v-model="popup" activator="parent" width="auto">
            <v-card style="text-align: center; padding-top: 1rem">
              <v-card-title>
                <h2>Add a new book</h2>
              </v-card-title>
              <v-form @submit.prevent>
                <v-text-field v-model="title" :rules="rules" label="Title"></v-text-field>
                <v-text-field v-model="author" :rules="rules" label="Author"></v-text-field>
                <v-text-field
                  v-model="description"
                  :rules="rules"
                  label="Description"
                ></v-text-field>
                <v-text-field v-model="imageUrl" :rules="rules" label="Image Link"></v-text-field>
                <v-text-field v-model="pages" :rules="rules" label="Pages"></v-text-field>
              </v-form>
              <v-card-actions>
                <v-btn color="rgb(13, 214, 184)" @click="handleAddBook">Add</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-tabs>
    </v-card>
    <div class="all-cards">
      <div v-for="book in books" :key="book.id">
        <v-card class="mx-auto" width="270">
          <v-img :src="book.imageUrl" height="200px" cover></v-img>

          <v-card-title>
            {{ book.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ book.author }}
          </v-card-subtitle>

          <v-card-subtitle>pages: {{ book.pages }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="#0dd6b8" variant="text" @click="show = !show"> Expand </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ book.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
  </div>
</template>
