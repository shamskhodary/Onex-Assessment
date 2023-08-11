<script setup>
import { onMounted, ref } from 'vue'
import './Dashboard.css'
import axios from 'axios'
import './Dashboard.css'
import BookForm from '../Book/BookForm.vue'
import BookCard from '../Book/BookCard.vue'

const props = defineProps({
  allBooks: Function,
  books: Array
})

async function onBooksChanged() {
  await props.allBooks()
}

onMounted(() => {
  props.allBooks()
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
      <BookCard :books="books"  @book-deleted="onBooksChanged" @book-edited="onBooksChanged"/>
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
