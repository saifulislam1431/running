import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Auth from './Auth/Auth.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <HelmetProvider>
        <Auth>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        </Auth>
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
