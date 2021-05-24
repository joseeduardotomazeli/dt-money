import { Container } from './styles';

import useTransactions from '../../hooks/useTransactions';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

function TransactionsTable() {
  const { transactions } = useTransactions();

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
                {transaction.type === 'withdraw' ? '- ' : ''}
                {formatCurrency(transaction.value)}
              </td>

              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
