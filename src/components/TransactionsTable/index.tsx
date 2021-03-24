import { useContext } from 'react';

import { Container } from './styles';

import { TransactionsContext } from '../../TransactionsContext';

function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  function formatValuePtBR(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  function formatDatePtBR(date: string) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatValuePtBR(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDatePtBR(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
