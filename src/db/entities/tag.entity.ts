import { BaseEntity } from '@/db/entities/base.entity';

export interface TagEntity extends BaseEntity {
  name: string;
  color: string;
}
