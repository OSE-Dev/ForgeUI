import { Meta, StoryObj } from '@storybook/react';

import ReactRndDemo from './react-rnd-demo';

const meta: Meta<typeof ReactRndDemo> = {
    component: ReactRndDemo,
};

export default meta;
type Story = StoryObj<typeof ReactRndDemo>;

export const Primary: Story = {
    args: {
    },
};
