import 'fake-indexeddb/auto';

import { beforeEach, describe, expect, it } from '@jest/globals';

import { NoteDocumentEntity } from '@/db/entities/note-document.entity';

import { db } from '../db';

describe('IndexedDB Notes Table Operations', () => {
  beforeEach(async () => {
    await db.notes.clear();
  });

  it('Insert a note', async () => {
    const note: NoteDocumentEntity = {
      title: 'Test Note',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const id = await db.notes.add(note);
    expect(id).toBe(1);
  });
});
