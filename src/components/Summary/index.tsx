import { Container } from './styles';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

function Summary() {
  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={income} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <img src={outcome} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={total} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}

export default Summary;
