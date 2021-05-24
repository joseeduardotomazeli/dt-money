import { Container } from './styles';

import useTransactions from '../../hooks/useTransactions';

import formatCurrency from '../../utils/formatCurrency';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case 'deposit':
          acc.deposits += transaction.value;
          acc.total += transaction.value;
          break;

        case 'withdraw':
          acc.withdraws += transaction.value;
          acc.total -= transaction.value;
          break;
      }

      return acc;
    },
    { deposits: 0, withdraws: 0, total: 0 }
  );

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={income} alt="Entradas" />
        </header>

        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <img src={outcome} alt="Saídas" />
        </header>

        <strong>- {formatCurrency(summary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={total} alt="Total" />
        </header>

        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  );
}

export default Summary;
