import { Meta, StoryObj } from '@storybook/react';

import Home from './home';

const meta: Meta<typeof Home> = {
    component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Primary: Story = {
    parameters: {
        storyType: 'page'
    },
};
