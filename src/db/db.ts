import Dexie from 'dexie';

import { NoteEntity } from '@/db/entities/note.entity';
import { NoteCellEntity } from '@/db/entities/note-cell.entity';

export type Database = Dexie & {
  notes: Dexie.Table<NoteEntity, number>;
  noteCells: Dexie.Table<NoteCellEntity, number>;
};

export const db = new Dexie('PtnkMathNotebook') as Database;

db.version(1).stores({
  notes: '++id, title, createdAt, updatedAt',
  noteCells: '++id, noteId, type, content, noteId, index',
});
