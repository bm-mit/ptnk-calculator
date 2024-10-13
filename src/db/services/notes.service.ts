import { db } from '@/db';

export const notesService = {
  async createNote(title: string) {
    return db.notes.add({ title });
  },

  async getNotes() {
    return db.notes.toArray();
  },

  async getNoteById(id: number) {
    return db.notes.get(id);
  },
};
