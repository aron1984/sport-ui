import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    }, },
    color: {
      control: {
        type: 'select',
        options: ['lakers', 'celtics', 'nba'],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    typeBtn: 'primary',
    label: 'Button',
    color: 'lakers'
  },
};

export const Secondary: Story = {
  args: {
    typeBtn: 'secondary',
    label: 'Button',
    color: 'lakers',
    border: true
  },
};

export const PrimaryRondedBordered: Story = {
  args: {
    typeBtn: 'primary',
    label: 'Button',
    color: 'lakers',
    border: true,
    rondeau: true
  },
};

export const Alternative: Story = {
  args: {
    typeBtn: 'alternative',
    label: 'Button',
    color: 'lakers'
  },
};

export const AlternativeRondeau: Story = {
  args: {
    typeBtn: 'alternative',
    label: 'Button',
    color: 'lakers',
    rondeau: true,
    border: true,
    img: 'https://img.icons8.com/?size=64&id=56044&format=png'
  },
};
