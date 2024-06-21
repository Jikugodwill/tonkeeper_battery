import { createGlobalStyle } from "styled-components";
import imgUrl from "../assets/bg.jpg";

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
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-top: 25px;
    cursor: pointer;
    font-size: medium;
    font-weight: 500;
    transition: background 0.3s;
  }

  button:hover {
    background: #5FBD80;
  }
  .step{
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    text-align: left;
    margin: 2rem 0;
  }
  .text{
    opacity: 0.5;
  }

  .bgimg {
    background-image: url(${imgUrl});
    background-size: cover;
    background-position: center;
    display: flex;
    height: 100%;
    width: 100vw;
    position: absolute;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .burgerIcon{
    display: none;
  
  }
  @media only screen and (max-width: 768px) {
    .how-it-works{
      width: 80% !important;
    }
    .burgerIcon{
      display: block;
      cursor: pointer;
    }
  }
`;

export default GlobalStyles;
