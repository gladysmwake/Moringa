import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Form from './stateAndEvents/form';
import ClickMe from './stateAndEvents/clickMe';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <ClickMe />
  </StrictMode>,
);