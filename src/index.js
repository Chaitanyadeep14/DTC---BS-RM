import React from 'react';
import ReactDOM from 'react-dom';
import AppWithRouter from './App';

if (window.location.pathname !== '/') {
  window.history.replaceState(null, '', '/');
}

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
