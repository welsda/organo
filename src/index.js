import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // O StrictMode auxilia com logs e notificação de erros o desenvolvimento
  // da aplicação localmente. Não é acionado pela aplicação quando a mesma
  // está em deploy
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


