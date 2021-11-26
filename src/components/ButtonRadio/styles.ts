import styled from 'styled-components';

export const Container = styled.label`
  width: 12rem;
  height: 12rem;
  border: 0.1rem solid var(--gray);
  margin-right: 1.3rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.4s ease-in;

  &.active {
    background: #7a34b610;
    border: 0.1rem solid var(--purple);
  }

  &:hover {
    background: #7a34b605;
    border: 0.1rem solid var(--purple);
  }

  header {
    aside {
      border: 0.1rem solid var(--gray);
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 0.25rem;

      color: var(--purple);
    }

    p {
      margin-top: 0.5rem;
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    b {
      font-size: 1.4rem;
    }

    span {
      font-size: 1.2rem;
      align-self: flex-end;
      margin-top: 0.5rem;
      text-transform: uppercase;
      color: var(--text);
      font-weight: 400;
    }
  }
`;
