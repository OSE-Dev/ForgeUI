import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../Client/styles/styles.sass';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';


/** @type { import('@storybook/react').Preview } */
const preview = {
    decorators: [
        (Story, { parameters }) => {
            const { storyType } = parameters;
            switch (storyType) {
                case 'page':
                    return (
                        <IntlProvider defaultLocale="en" locale={'en'}>
                            <BrowserRouter>
                                <Story />
                            </BrowserRouter>
                        </IntlProvider>
                    );
                default:
                    return <Story />;
            }
        },
    ],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
    tags: ['autodocs'],
};

export default preview;
