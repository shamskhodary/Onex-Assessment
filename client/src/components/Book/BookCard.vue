<script setup>
import { ref } from 'vue'
import { mdiDelete, mdiPencil } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import axios from 'axios';
import swal from '../../helpers/swal';
import EditBook from './EitBook.vue'

const props = defineProps({
  books: Array
})

const pencil = ref(mdiPencil)
const deleteIcon = ref(mdiDelete)



async function handleDeleteBook(id){
  const {data, status} = await axios.delete(`/api/v1/books/${id}`)
  if(status === 200){
    swal("success", data.message)
  }
}
</script>

<template>
  <div class="all-cards">
    <div v-for="book in books" :key="book.id" >
      <v-card class="mx-auto" width="270">
        <v-img :src="book.imageUrl" height="200px" cover></v-img>

        <v-card-title style="display: flex; justify-content: space-between; align-items: center">
          {{ book.title }}
          <div style="display: flex; gap: 1rem;">
            <svg-icon type="mdi" :path="pencil" style="cursor: pointer;" @click="book.popup = true"></svg-icon>
            <svg-icon type="mdi" :path="deleteIcon" style="cursor: pointer;" @click="handleDeleteBook(book.id)"></svg-icon>
          </div>
        </v-card-title>
        <EditBook :book="book"/>
        <v-card-subtitle>
          {{ book.author }}
        </v-card-subtitle>

        <v-card-subtitle>pages: {{ book.pages }}</v-card-subtitle>

        <v-card-actions>
          <v-btn color="#0dd6b8" variant="text" @click="book.expanded = !book.expanded"> Expand </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-if="book.expanded">
            <v-divider></v-divider>

            <v-card-text>
              {{ book.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>
