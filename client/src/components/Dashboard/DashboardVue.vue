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
    const { data } = await axios.get('/api/v1/books')

    const allInfo = data.map((x) => ({ ...x, expanded: false, popup: false }))
    books.value = allInfo

  } catch (error) {
    books.value = []
  }
}

async function onBooksChanged() {
  await allBooks()
}

onMounted(() => {
  allBooks()
})
</script>

<template>
  <div class="dash">
    <v-card>
      <v-tabs>
        <v-tab>My Book List</v-tab>
        <v-btn class="add-btn">Add book </v-btn>
        <BookForm @books-changed="onBooksChanged"/>
      </v-tabs>
    </v-card>
    <div v-if="books.length">
      <BookCard :books="books"  @book-deleted="onBooksChanged"/>
    </div>
    <div v-else class="not-found">
      <p>No books found</p>
      <img
        src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
        alt=""
      />
    </div>
  </div>
</template>
