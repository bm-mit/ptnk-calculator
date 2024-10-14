import { Database } from '@/db';
import { NoteEntity } from '@/db/entities/note.entity';
import { CellType } from '@/types/cell.types';

export class NoteCellsService {
  constructor(private db: Database) {}

  async create(cellType: CellType) {
    return this.db.noteCells.add({ cellType, content: '' });
  }

  async getById(id: number) {
    return this.db.noteCells.get(id);
  }

  async getAllByNote(note: NoteEntity) {
    return Promise.all(note.cellIds.map((id) => this.getById(id)));
  }

  async updateContent(id: number, content: string) {
    return this.db.noteCells.update(id, { content });
  }

  async updateCellType(id: number, cellType: CellType) {
    return this.db.noteCells.update(id, { cellType });
  }
}
