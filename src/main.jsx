import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <BrowserRouter> */}
       <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
       {/* </BrowserRouter> */}
  </React.StrictMode>,
)
