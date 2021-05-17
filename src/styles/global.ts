import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
      background: #1B1B1F;
      scroll-behavior: smooth;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #eaeaea;
  }

  .container {
    width: 1026px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
  }
`;
