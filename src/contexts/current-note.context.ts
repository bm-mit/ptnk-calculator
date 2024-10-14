import { createContext } from 'react';

import { NoteEntity } from '@/db/entities/note.entity';

export const CurrentNoteContext = createContext<NoteEntity>({
  id: 0,
  title: 'Default Note',
  cellIds: [],
});
