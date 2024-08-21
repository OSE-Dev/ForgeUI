import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { type ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import AppRoutes from './app-routes';
import { PrimeReactProvider } from 'primereact/api';

export function App(): ReactElement {
	return (
		<React.StrictMode>
            <PrimeReactProvider>
                <IntlProvider defaultLocale="en" locale={'en'}>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </IntlProvider>
            </PrimeReactProvider>
		</React.StrictMode>
	);
}
