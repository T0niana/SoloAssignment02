<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Note } from "../types/notes.ts"

defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  (event: 'delete', id: number): void
}>()
</script>

<template>
  <BaseCard>
    <template #header>
      <div class="note-header">
        <h3>{{ note.title }}</h3>

        <button
          type="button"
          @click="emit('delete', note.id)"
        >
          Löschen
        </button>
      </div>
    </template>

    <p>{{ note.content }}</p>

    <ul v-if="note.tags.length > 0" class="tags">
      <li
        v-for="tag in note.tags"
        :key="tag"
      >
        #{{ tag }}
      </li>
    </ul>
  </BaseCard>
</template>

<style scoped>
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

h2 {
  margin: 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
  
}

.tags li {
  padding: 0.2rem 0.5rem;
  background: #f7cdff;
  border-radius: 12px;
}

button {
  padding: 0.4rem 0.7rem;
  cursor: pointer;
}
</style>