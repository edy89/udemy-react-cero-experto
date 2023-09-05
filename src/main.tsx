import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // The StrictMode don't work on production deployments
  <React.StrictMode> 
    <GifExpertApp />
  </React.StrictMode>
)
