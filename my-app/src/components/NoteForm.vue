<script setup lang="ts">
import { ref } from 'vue'
import type { NoteInput } from "../types/notes.ts"

const title = ref('')
const content = ref('')
const tagsText = ref('')

const emit = defineEmits<{
  (event: 'add-note', note: NoteInput): void
}>()

function submitNote() {
  const cleanTitle = title.value.trim()
  const cleanContent = content.value.trim()

  if (!cleanTitle || !cleanContent) {
    return
  }

  const tags = tagsText.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '')

  emit('add-note', {
    title: cleanTitle,
    content: cleanContent,
    tags
  })

  title.value = ''
  content.value = ''
  tagsText.value = ''
}
</script>

<template>
  <form class="note-form" @submit.prevent="submitNote">
    <label>
      Titel
      <input v-model="title" type="text" required placeholder="Titel" />
    </label>

    <label>
      Text
      <textarea v-model="content" required/>
    </label>

    <label>
      Tags
      <input
        v-model="tagsText"
        type="text"
        placeholder="Uni, ToDo, Privat"
      >
    </label>

    <button class="btn" type="submit">
      Notiz hinzufügen
    </button>
  </form>
</template>

<style scoped>
.note-form {
  display: grid;
  gap: 1rem;
}

.btn{
    margin-bottom: 4rem;
}

label {
  display: grid;
  gap: 0.4rem;
}

input,
textarea,
button {
  padding: 0.6rem;
  font: inherit;
}

textarea {
  min-height: 100px;
}
</style>