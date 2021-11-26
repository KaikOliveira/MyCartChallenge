import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
`;

export const Container = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 890px;

  @media (max-width: 906px) {
    /* background: red; */
    padding: 0 1.8rem;
  }

  @media (max-width: 906px) {
    width: 100vw;
    height: 100vh;
    padding: 2rem;

    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7a34b680;
    }
  }

  @media (max-height: 758px) {
    height: 100vh;
    padding: 2rem;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7a34b680;
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-top: 2.4rem;
    }

    > p {
      font-size: 2.2rem;
      color: var(--purple);
      font-weight: 500;
    }

    > span {
      font-size: 1.6rem;
      color: var(--text);
      font-weight: 400;
    }

    section {
      display: flex;
      margin-top: 1.8rem;
    }
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 0.1rem solid var(--border);
  padding-top: 2.3rem;
  margin-top: 4rem;

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 0.5rem;
    }

    span {
      color: var(--text);
      font-size: 1.4rem;
      font-weight: 400;
    }

    p {
      color: var(--purple);
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  button {
    margin-top: 1.8rem;
    width: 20rem;
    height: 4rem;
    border: 0 none;
    color: var(--white);
    font-size: 1.3rem;
    background: var(--purple);
    border-radius: 0.4rem;
    transition: all 0.3s ease;

    &:hover {
      background: #7a34b699;
    }

    &:disabled {
      background: rgba(0, 0, 0, 0.23);
      cursor: not-allowed;
    }
  }
`;

export const Error = styled.h3`
  font-size: 1.6rem;
  color: var(--red);
  font-weight: 400;
`;
