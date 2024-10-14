import { BaseEntity } from '@/db/entities/base.entity';

export interface NoteEntity extends BaseEntity {
  title: string;
  tags?: string[];

  cellIds: number[];
}
