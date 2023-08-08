<script setup>
import { ref } from 'vue'

const props = defineProps({
  popup: Boolean,
  handleEditBook: Function
})

const editedBook = ref({
  title: '',
  author: '',
  description: '',
  imageUrl: '',
  pages: ''
})

</script>
<template>
  <v-dialog v-if="popup" activator="parent" width="auto">
    <v-card style="text-align: center; padding-top: 1rem">
      <v-card-title>
        <h2>Edit book</h2>
      </v-card-title>
      <v-form>
        <v-text-field v-model="editedBook.title" label="Title"></v-text-field>
        <v-text-field v-model="editedBook.author" label="Author"></v-text-field>
        <v-text-field v-model="editedBook.description" label="Description"></v-text-field>
        <v-text-field v-model="editedBook.imageUrl" label="Image Link"></v-text-field>
        <v-text-field v-model="editedBook.pages" label="Pages"></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn color="rgb(13, 214, 184)" @click="handleEditBook">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
