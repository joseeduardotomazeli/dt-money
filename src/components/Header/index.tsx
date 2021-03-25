import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header(props: HeaderProps) {
  const { onOpenNewTransactionModal } = props;

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

export default Header;
