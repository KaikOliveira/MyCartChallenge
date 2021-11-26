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
    --purple: #512978;

    --text:  #323B4B;
    --text-low: #6A777D;

    --gray: #CBD1D5;
    --gray-low: #F7F7FC;
    --gray-nardo: #76899F;
    --border: #E8EBF0;

    --placeholder: #A0A3BD;
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

  .Toastify__toast-container {
    z-index: 99999999 !important;
  }
`;
