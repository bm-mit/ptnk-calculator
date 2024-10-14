import { Meta, StoryObj } from '@storybook/react';

import { CellType } from '@/types/cell.types';

import DocumentCell from '.';

const meta: Meta<typeof DocumentCell> = {
  component: DocumentCell,
};

export default meta;

type Story = StoryObj<typeof DocumentCell>;

export const Default: Story = {
  args: {
    cell: {
      id: 1,
      content: '# Note',
      cellType: CellType.Markdown,
    },
    index: 0,
  },
};
