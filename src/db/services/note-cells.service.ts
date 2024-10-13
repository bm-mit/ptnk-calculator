import { Database } from '@/db';
import { NotesService } from '@/db/services/notes.service';
import { CellType } from '@/types/cell.types';

export class NoteCellsService {
  constructor(private db: Database) {}

  private async createNoteCell(cellType: CellType) {
    return this.db.noteCells.add({ cellType, content: '' });
  }

  async getNoteCellById(id: number) {
    return this.db.noteCells.get(id);
  }

  async updateNoteCellContent(id: number, content: string) {
    return this.db.noteCells.update(id, { content });
  }

  async changeNoteCellType(id: number, cellType: CellType) {
    return this.db.noteCells.update(id, { cellType });
  }
}
