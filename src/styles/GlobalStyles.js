import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
  }

  a {
    color: #00bcd4;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #00acc1;
  }

  nav a {
    margin: 0 1rem;
  }

  button {
    background: #00bcd4;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #00acc1;
  }
`;

export default GlobalStyles;
