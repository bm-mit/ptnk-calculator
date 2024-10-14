import { useContext } from 'react';

import { NotesServiceContext } from '@/contexts/notes-service.context';

export function useNotesService() {
  return useContext(NotesServiceContext);
}
