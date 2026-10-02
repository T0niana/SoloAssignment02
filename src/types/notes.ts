export interface Note {
  id: number
  title: string
  content: string
  tags: string[]
}

export type NoteInput = Omit<Note, 'id'>