import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AmazonPage from './Amazon';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmazonPage />
  </StrictMode>,
);