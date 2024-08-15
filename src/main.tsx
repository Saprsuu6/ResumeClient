import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Landing from './app/pages/Landing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
  </StrictMode>
);
