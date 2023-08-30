import { Nav } from './Nav';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/movie-magic-rsc',
        query: 'q=top-10&cert=PG-13&cert=R',
      },
    },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
