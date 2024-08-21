import { Meta, StoryObj } from '@storybook/react';

import MainLayout from './main-layout';

const meta: Meta<typeof MainLayout> = {
    component: MainLayout,
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {
    parameters: {
        storyType: ''
    },
};
