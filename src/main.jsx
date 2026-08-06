import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LifeCycle from './SideEffectsConditions/LifeCycle';
import StopWatch from './SideEffectsConditions/StopWatch';
import GithubProject from './GithubProject';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopWatch/>
    <GithubProject/>
  </StrictMode>,
);