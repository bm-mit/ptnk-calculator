import { Meta, StoryObj } from '@storybook/react';

import { CellType } from '@/types/cell.types';

import CodeEditor from './index';

const meta: Meta<typeof CodeEditor> = {
  component: CodeEditor,
};

export default meta;

type Story = StoryObj<typeof CodeEditor>;

export const Default: Story = {
  args: {
    language: CellType.Markdown,
  },
};
