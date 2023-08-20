import { Title } from './Title';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Title',
  },
} satisfies Story;
