import '@babel/polyfill';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import App from './App';
import DefaultErrorBoundary from './DefaultErrorBoundary';

ReactDOM.render(
  <StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);
