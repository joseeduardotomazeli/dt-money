import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import App from './App';

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          type: 'deposit',
          amount: 12000,
          category: 'Desenvolvimento',
          createdAt: new Date(),
        },
      ];
    });

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
