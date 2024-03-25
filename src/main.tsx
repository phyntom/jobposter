import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className={`text-foreground h-screen font-poppins`}>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
