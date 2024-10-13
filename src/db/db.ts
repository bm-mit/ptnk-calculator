import Dexie from 'dexie';

import { NoteDocumentEntity } from '@/db/entities/note-document.entity';
import { NoteDocumentCellEntity } from '@/db/entities/note-document-cell.entity';
import { TagEntity } from '@/db/entities/tag.entity';

export const db = new Dexie('PtnkMathNotebook') as Dexie & {
  notes: Dexie.Table<NoteDocumentEntity, number>;
  noteCells: Dexie.Table<NoteDocumentCellEntity, number>;
  tags: Dexie.Table<TagEntity, number>;
};
