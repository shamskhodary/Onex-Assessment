<script setup>
import { onMounted, ref } from 'vue'
import './Dashboard.css'
import axios from 'axios'
import './Dashboard.css'
import BookForm from '../Book/BookForm.vue'
import BookCard from '../Book/BookCard.vue'

const books = ref([])

async function allBooks() {
  try {
    const { data } = await axios.get('/api/v1/books');
   const allInfo = data.map((x) => ({...x, expanded: false, popup: false}))
    books.value = allInfo
  } catch (error) {
    books.value = []
  }
}
onMounted(() => {
  allBooks()
})

</script>

<template>
  <div class="dash">
    <v-card>
      <v-tabs v-if="books.length">
        <v-tab>My Book List</v-tab>
        <v-btn class="add-btn">Add book </v-btn>
        <BookForm />
      </v-tabs>
    </v-card>
    <BookCard :books="books" />
  </div>
</template>
