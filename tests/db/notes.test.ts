import 'fake-indexeddb/auto';

import { beforeEach, describe, expect, it } from '@jest/globals';

import { db } from '@/db';
import { NotesService } from '@/db/services/notes.service';

describe('IndexedDB Notes Table Operations', () => {
  const notesService = new NotesService();

  beforeEach(async () => {
    await db.notes.clear();
  });

  it('Insert a note', async () => {
    const id = await notesService.createNote('Test Note');
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
});
