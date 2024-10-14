import { FaPlus } from 'react-icons/fa6';

import { useCurrentNote } from '@/hooks/useCurrentNote';
import { useNotesService } from '@/hooks/useNotesService';
import { CellType } from '@/types/cell.types';

export interface NewCellBelowProps {
  index: number;
}

export default function NewCellBelow({ index }: NewCellBelowProps) {
  const notesService = useNotesService();
  const currentNote = useCurrentNote();

  const addNewCellBelow = () => {
    notesService.addCellByIndex(currentNote.id!, CellType.Markdown, index + 1);
  };

  return <FaPlus onClick={} />;
}
