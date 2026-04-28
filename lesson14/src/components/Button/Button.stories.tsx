import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { fn, expect } from 'storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
  play: async function ({ args, canvas, userEvent }) {
    const button = canvas.getByRole('button', { name: /button/i });

    await userEvent.click(button);

    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
