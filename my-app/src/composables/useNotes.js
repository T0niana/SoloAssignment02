import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(note) {
    const newNote = {
      id: Date.now(),
      ...note
    }

    notes.value.push(newNote)
  }

  function deleteNote(id) {
    notes.value = notes.value.filter(note => note.id !== id)
  }

  function filteredNotes(term) {
    return computed(() => {
      const searchTerm = term.value.trim().toLowerCase()

      if (searchTerm === '') {
        return notes.value
      }

      return notes.value.filter(note => {
        const titleMatches = note.title
          .toLowerCase()
          .includes(searchTerm)

        const contentMatches = note.content
          .toLowerCase()
          .includes(searchTerm)

        const tagMatches = note.tags.some(tag =>
          tag.toLowerCase().includes(searchTerm)
        )

        return titleMatches || contentMatches || tagMatches
      })
    })
  }

  return {
    notes,
    addNote,
    deleteNote,
    filteredNotes
  }
}