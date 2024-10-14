import { createContext } from 'react';

import { db } from '@/db';
import { NoteCellsService } from '@/db/services/note-cells.service';
import { NotesService } from '@/db/services/notes.service';

export const NotesServiceContext = createContext<NotesService>(
  new NotesService(db, new NoteCellsService(db)),
);
