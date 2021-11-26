import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  :root {
    --background: #f5f5f5;
    --white: #fff;
    --black: #000505;
    --purple: #7A34B6;
    --red: #e54b4b;
    --text:  #323B4B;
    --gray: #CBD1D5;
    --border: #E8EBF0;
  }
  html {
    font-size: 62.5%; /* = 10px */
  }

  @media(max-width: 768px) {
    html {
      font-size: 58.333%;
    }
  }
  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
  body {
    background: var(--background);
    color: var(--black);
  }
  body, input, button, textarea, span, p {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif !important;
  }

  span, p {
    letter-spacing: 0.075rem;
  }

  button {
    cursor: pointer;
  }
`;
