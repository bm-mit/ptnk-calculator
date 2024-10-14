import Dexie from 'dexie';

import { NoteEntity } from '@/db/entities/note.entity';
import { NoteCellEntity } from '@/db/entities/note-cell.entity';

export type Database = Dexie & {
  notes: Dexie.Table<NoteEntity, number>;
  noteCells: Dexie.Table<NoteCellEntity, number>;
};

export const db = new Dexie('PtnkMathNotebook') as Database;

db.version(1).stores({
  notes: '++id, title, cellsId',
  noteCells: '++id, noteId, type, content, noteId, index',
});

db.version(1).upgrade((tx) => {
  // tx is a transaction object; use it to access your tables
  tx.table('notes').add({ id: 1, title: 'Default Note', cellsId: [1] });
});

// Open the database
db.open().catch((err) => {
  console.error(`Failed to open db: ${err.stack || err}`);
});
