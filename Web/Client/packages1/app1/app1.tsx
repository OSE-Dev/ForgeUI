import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { type ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import AppRoutes from './app-routes';

export function App(): ReactElement {
	return (
		<React.StrictMode>
			<IntlProvider defaultLocale="en" locale={'en'}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</IntlProvider>
		</React.StrictMode>
	);
}
