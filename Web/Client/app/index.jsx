import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/styles.sass';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App />);
