import { BaseEntity } from '@/db/entities/base.entity';
import { CellType } from '@/types/cell.types';

export interface NoteDocumentCellEntity extends BaseEntity {
  content: string;
  cellType: CellType;
}
