import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import App from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          value: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          value: 1100,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date(),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
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
