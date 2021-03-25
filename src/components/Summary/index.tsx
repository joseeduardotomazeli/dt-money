import { Container } from './styles';

import useTransactions from '../../hooks/useTransactions';

import { formatCurrencyPtBR } from '../../utils/format';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else if (transaction.type === 'withdraw') {
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
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

        <strong>{formatCurrencyPtBR(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <img src={outcome} alt="Saídas" />
        </header>

        <strong>- {formatCurrencyPtBR(summary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={total} alt="Total" />
        </header>

        <strong>{formatCurrencyPtBR(summary.total)}</strong>
      </div>
    </Container>
  );
}

export default Summary;
