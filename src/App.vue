<script setup>
import { ref } from 'vue'
import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'
import SearchBar from './components/SearchBar.vue'

import { useNotes } from './composables/useNotes.js'

const searchTerm = ref('')

const {
  notes,
  addNote,
  deleteNote,
  filteredNotes
} = useNotes()

const visibleNotes = filteredNotes(searchTerm)
</script>

<template>
  <main>
    <h1 class="title">Quick Notes</h1>

    <section>
      <h2>Neue Notiz anlegen</h2>

      <NoteForm @add-note="addNote" />
    </section>

    <section>
      <h2>Notizen</h2>

      <SearchBar v-model="searchTerm" />

      <p v-if="notes.length === 0">
        Du hast noch keine Notizen angelegt.
      </p>

      <p v-else-if="visibleNotes.length === 0">
        Keine passende Notiz gefunden.
      </p>

      <div v-else class="notes">
        <NoteCard
          v-for="note in visibleNotes"
          :key="note.id"
          :note="note"
          @delete="deleteNote"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  width: min(800px, 90%);
  margin: 2rem auto;
}

.title {
  font-size: 4rem;
}

section {
  margin-bottom: 2rem;
}

.notes {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}
</style>