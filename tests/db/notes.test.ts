import 'fake-indexeddb/auto';

import { beforeEach, describe, expect, it } from '@jest/globals';

import { db } from '@/db';
import { notesService } from '@/db/services/notes.service';

describe('IndexedDB Notes Table Operations', () => {
  beforeEach(async () => {
    await db.notes.clear();
  });

  it('Insert a note', async () => {
    const id = await notesService.createNote('Test Note');
    const { title } = (await notesService.getNoteById(id)) ?? {};
    expect(title).toBe('Test Note');
  });
});
