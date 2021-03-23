import styled from 'styled-components';
import { transparentize, darken } from 'polished';

interface TransactionTypeProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
};

export const Container = styled.div`
  h2 {
    margin-bottom: 2rem;

    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    padding: 0 1.5rem;

    width: 100%;
    height: 4rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;

    width: 100%;
    height: 4rem;

    border: 0;
    border-radius: 0.25rem;
    background-color: var(--green);
    font-weight: 600;
    color: #fff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  margin: 1rem 0;
`;

export const TransactionType = styled.button<TransactionTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 28px;
    height: 28px;
  }

  span {
    display: inline-block;

    margin-left: 1rem;

    font-size: 1rem;
    color: var(--text-title);
  }
`;
