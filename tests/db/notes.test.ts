import 'fake-indexeddb/auto';

import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { debug } from 'console';

import { db } from '@/db';
import { NoteCellsService } from '@/db/services/note-cells.service';
import { NotesService } from '@/db/services/notes.service';
import { CellType } from '@/types/cell.types';

describe('IndexedDB Notes Table Operations', () => {
  const notesService = new NotesService(db, new NoteCellsService(db));

  beforeEach(async () => {
    await db.notes.clear();
    jest.resetAllMocks();
  });

  it('Insert a note', async () => {
    const id = await notesService.createNote('Test Note');
    debug('id', id);
    const { title } = (await notesService.getNoteById(id)) ?? {};
    expect(title).toBe('Test Note');
  });

  it('Get all notes', async () => {
    await notesService.createNote('Test Note 1');
    await notesService.createNote('Test Note 2');
    const notes = await notesService.getNotes();
    expect(notes).toHaveLength(2);
  });

  it('Update a note title', async () => {
    const id = await notesService.createNote('Test Note');
    await notesService.updateNoteTitle(id, 'Updated Note');
    const { title } = (await notesService.getNoteById(id)) ?? {};
    expect(title).toBe('Updated Note');
  });

  it('Delete a note', async () => {
    const id = await notesService.createNote('Test Note');
    await notesService.deleteNoteById(id);
    const note = await notesService.getNoteById(id);
    expect(note).toBeUndefined();
  });

  it('Add a tag to a note', async () => {
    const id = await notesService.createNote('Test Note');
    await notesService.addTagToNoteById(id, 'Test Tag');
    const { tags } = (await notesService.getNoteById(id)) ?? {};
    expect(tags).toEqual(['Test Tag']);
  });

  it('Get all note cells', async () => {
    const noteId = await notesService.createNote('Test Note');
    await notesService.addCellByIndex(noteId, CellType.Markdown, 0);
    await notesService.addCellByIndex(noteId, CellType.LaTeX, 1);

    const cells = await notesService.getAllCells(noteId);
    expect(cells).toHaveLength(3);
    expect(cells[0]!.cellType).toBe(CellType.Markdown);
    expect(cells[1]!.cellType).toBe(CellType.LaTeX);
    expect(cells[2]!.cellType).toBe(CellType.Markdown);
  });
});
