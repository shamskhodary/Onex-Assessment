<script setup>
import axios from 'axios';
import { ref } from 'vue'
import swal from '../../helpers/swal';

const props = defineProps({
  book: Object,
})

// eslint-disable-next-line vue/no-setup-props-destructure
const newBook = ref(props.book)
const emit = defineEmits(["book-edited"])

const handleEditBook = async () => {

  const {data, status} = await axios.put(`/api/v1/books/${props.book.id}`, newBook.value)
  if(status === 200){
    swal("success", data.message)
    props.book.popup= false
    emit('book-edited')
  }
}

</script>
<template>
  <v-dialog v-if="book.popup" activator="parent" width="auto">
    <v-card style="text-align: center; padding-top: 1rem">
      <v-card-title>
        <h2>Edit book</h2>
      </v-card-title>
      <v-form>
        <v-text-field v-model="newBook.title" label="Title"></v-text-field>
        <v-text-field v-model="newBook.author" label="Author"></v-text-field>
        <v-text-field v-model="newBook.description" label="Description"></v-text-field>
        <v-text-field v-model="newBook.imageUrl" label="Image Link"></v-text-field>
        <v-text-field v-model="newBook.pages" label="Pages"></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn color="rgb(13, 214, 184)" @click="handleEditBook">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
