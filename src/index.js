import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './assets/css/index.css'

import { StateProvider } from './components/StateProvider/StateProvider';
import reducer, { initialState } from './data/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
