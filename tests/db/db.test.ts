import { describe, expect, it } from '@jest/globals';

describe('IndexedDB Connection', () => {
  it('Should connect to IndexedDB', async () => {
    const db = await import('@/db');
    expect(db).toBeDefined();
  });
});
