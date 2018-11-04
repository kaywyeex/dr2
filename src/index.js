import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

const app = document.querySelector('#app');

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app,
);
