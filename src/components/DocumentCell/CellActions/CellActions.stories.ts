import { Meta, StoryObj } from '@storybook/react';

import CellActions from '.';

const meta: Meta<typeof CellActions> = {
  component: CellActions,
};

export default meta;

type Story = StoryObj<typeof CellActions>;

export const Default: Story = {
  args: {
    index: 0,
  },
};
