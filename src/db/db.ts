import Dexie from 'dexie';

import { NoteDocumentEntity } from '@/db/entities/note-document.entity';
import { NoteDocumentCellEntity } from '@/db/entities/note-document-cell.entity';
import { TagEntity } from '@/db/entities/tag.entity';

export type Database = Dexie & {
  notes: Dexie.Table<NoteDocumentEntity, number>;
  noteCells: Dexie.Table<NoteDocumentCellEntity, number>;
  tags: Dexie.Table<TagEntity, number>;
};

export const db = new Dexie('PtnkMathNotebook') as Database;

db.version(1).stores({
  notes: '++id, title, createdAt, updatedAt',
  noteCells: '++id, noteId, type, content',
  tags: '++id, name',
});
