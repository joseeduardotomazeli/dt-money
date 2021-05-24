import { useState } from 'react';
import Modal from 'react-modal';

import TransactionsProvider from './contexts/TransactionsProvider';

import NewTransactionModal from './components/NewTransactionModal';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import GlobalStyle from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
