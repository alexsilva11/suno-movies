import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GenresProvider } from './hooks/GenresContext';

ReactDOM.render(
  <React.StrictMode>
    <GenresProvider>
      <App />
    </GenresProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
