import { BaseEntity } from '@/db/entities/base.entity';

export interface NoteDocumentEntity extends BaseEntity {
  title: string;
  tagsId?: number[];
}
