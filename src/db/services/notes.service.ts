import Dexie from 'dexie';

import { Database } from '@/db';
import { CellType } from '@/types/cell.types';

import { NoteCellsService } from './note-cells.service';

export class NotesService {
  constructor(
    private db: Database,
    private noteCellsService: NoteCellsService,
  ) {}

  async createNote(title: string) {
    const cellId = await this.noteCellsService.create(CellType.Markdown);

    return this.db.notes.add({ title, cellIds: [cellId] });
  }

  async addCellByIndex(noteId: number, cellType: CellType, index: number) {
    const cellId = await this.noteCellsService.create(cellType);

    const note = await this.db.notes.get(noteId);
    if (!note) {
      throw new Dexie.NotFoundError('Note not found');
    }

    note.cellIds.splice(index, 0, cellId);
    return this.db.notes.update(noteId, { cellIds: note.cellIds });
  }

  async getAllCells(noteId: number) {
    const note = await this.db.notes.get(noteId);
    if (!note) {
      throw new Dexie.NotFoundError('Note not found');
    }

    return this.noteCellsService.getAllByNote(note);
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
