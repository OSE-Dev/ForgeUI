import { Meta, StoryObj } from '@storybook/react';

import About from './index';

const meta: Meta<typeof About> = {
    component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const Primary: Story = {
    parameters: {
        storyType: 'page'
    },
};
