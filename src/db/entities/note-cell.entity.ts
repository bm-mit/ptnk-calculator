import { BaseEntity } from '@/db/entities/base.entity';
import { CellType } from '@/types/cell.types';

export interface NoteCellEntity extends BaseEntity {
  content: string;
  cellType: CellType;
}
