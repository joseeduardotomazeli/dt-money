import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  max-width: 1120px;

  button {
    padding: 0 2rem;

    height: 3rem;

    border: 0;
    border-radius: 0.25rem;
    background-color: var(--blue-light);
    color: #fff;
    font-size: 1rem;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
