import { createContext, useState, useEffect, ReactNode } from 'react';

import api from '../services/api';

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

type NewTransaction = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[];
  createNewTransaction: (transactions: NewTransaction) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { children } = props;

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('transactions');
      setTransactions(response.data.transactions);
    }

    getTransactions();
  }, []);

  async function createNewTransaction(newTransaction: NewTransaction) {
    const response = await api.post('/transaction', {
      ...newTransaction,
      createdAt: new Date(),
    });

    const { transaction } = response.data;
    setTransactions((transactions) => [...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
