import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&display=swap');
*, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  body {
    background-color: #0a0a0a;
    color: #ffffff;
  }

  a {
    color: #5FBD80;
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
    background: #212f42f5;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 25px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #00acc1;
  }
  .step{
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    text-align: left;
    margin: 2rem 0;
  }
  .text{
    opacity: 0.7;
  }
`;

export default GlobalStyles;
