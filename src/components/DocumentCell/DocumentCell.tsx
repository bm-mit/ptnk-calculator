import { FaPlay } from 'react-icons/fa';

import CellActions from '@/components/DocumentCell/CellActions';
import { NoteCellEntity } from '@/db/entities/note-cell.entity';

import CodeEditor from './CodeEditor';

export interface DocumentCellProps {
  cell: NoteCellEntity;
  index: number;
}

export default function DocumentCell({ cell, index }: DocumentCellProps) {
  return (
    <div className="relative grid grid-cols-[20px_1fr]">
      <FaPlay />
      <CodeEditor language={cell.cellType} />
      <CellActions index={index} className="absolute right-0 top-0" />
    </div>
  );
}
