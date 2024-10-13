import Dexie from 'dexie';

import { Database } from '@/db';

import { NoteCellsService } from './note-cells.service';

export class NotesService {
  constructor(
    private db: Database,
    private noteCellsService: NoteCellsService,
  ) {}

  async createNote(title: string) {
    return this.db.notes.add({ title });
  }

  async getNotes() {
    return this.db.notes.toArray();
  }

  async getNoteById(id: number) {
    return this.db.notes.get(id);
  }

  async updateNoteTitle(id: number, title: string) {
    return this.db.notes.update(id, { title });
  }

  async deleteNoteById(id: number) {
    return this.db.notes.delete(id);
  }

  async addTagToNoteById(noteId: number, tag: string) {
    const note = await this.db.notes.get(noteId);
    if (!note) {
      throw new Dexie.NotFoundError('Note not found');
    }

    if (!note.tags) {
      note.tags = [];
    }

    note.tags.push(tag);
    return this.db.notes.update(noteId, { tags: note.tags });
  }
}
