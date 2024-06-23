import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app1.js';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.sass'

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App />);
