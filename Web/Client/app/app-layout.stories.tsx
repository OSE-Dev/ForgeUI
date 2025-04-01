import { Meta, StoryObj } from '@storybook/react';

import AppLayout from './app-layout';

const meta: Meta<typeof AppLayout> = {
    component: AppLayout,
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Primary: Story = {
    parameters: {
        storyType: ''
    },
};
