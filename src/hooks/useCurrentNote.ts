import { useContext } from 'react';

import { CurrentNoteContext } from '@/contexts/current-note.context';

export function useCurrentNote() {
  return useContext(CurrentNoteContext);
}
