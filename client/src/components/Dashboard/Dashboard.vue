<script setup>
import { onMounted, ref } from 'vue'
import './Dashboard.css'
import axios from 'axios'

const books = ref([])
const show = ref(false)

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
</script>

<template>
  <div class="dash">
    <v-card>
      <v-tabs>
        <v-tab>My Book List</v-tab>
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

<style>
.bg-primary {
  background-color: rgb(13, 214, 184) !important;
}

.dash {
  margin: 2rem 1rem;
}

.all-cards {
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.v-img__img--cover {
  object-position: top;
}
</style>
