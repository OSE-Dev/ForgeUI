import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.sass'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App />);
