import { useState, FormEvent } from 'react';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, TransactionType } from './styles';

import useTransactions from '../../hooks/useTransactions';

import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal(props: NewTransactionModalProps) {
  const { createNewTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  const { isOpen, onRequestClose } = props;

  function setTypeDeposit() {
    setType('deposit');
  }

  function setTypeWithdraw() {
    setType('withdraw');
  }

  async function handleSubmitNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      type,
      category,
    };

    await createNewTransaction(data);

    setTitle('');
    setValue(0);
    setType('deposit');
    setCategory('');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button" className="modal-close" onClick={onRequestClose}>
        <img src={close} alt="Fechar modal" />
      </button>

      <h2>Cadastrar Transação</h2>

      <Container>
        <form onSubmit={handleSubmitNewTransaction}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <TransactionType
              type="button"
              isActive={type === 'deposit'}
              activeColor="green"
              onClick={setTypeDeposit}
            >
              <img src={income} alt="Entrada" />
              <span>Entrada</span>
            </TransactionType>

            <TransactionType
              type="button"
              isActive={type === 'withdraw'}
              activeColor="red"
              onClick={setTypeWithdraw}
            >
              <img src={outcome} alt="Saída" />
              <span>Saída</span>
            </TransactionType>
          </TransactionTypeContainer>

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
