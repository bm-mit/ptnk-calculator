import type { Preview } from '@storybook/react';
import { Providers } from '../src/app/providers';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
};

export default preview;
