import { useContext } from 'react';

import { TransactionsContext } from '../contexts/TransactionsProvider';

function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}

export default useTransactions;
