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
    opacity: 0.7;
  }

  
  .burgerIcon{
    display: none;
  
  }
  .use-cases>.content{
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

  }
  .cta>.content{
    display: flex;
    position: relative;
    padding: 72px 48px;
    ${"" /* background: #212f42; */}
    ${
      "" /* background: linear-gradient(to right, #212f42, rgba(255, 0, 0, 0)); */
    }
    background: linear-gradient(to right, #212f42 0%, #212f42 37%, rgba(255, 0, 0, 0) 100%);
    text-align: left;
    align-items: stretch;
    flex-flow: row nowrap !important;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .cta{
    border-radius: 8px;
    width: 80% !important;
    padding: 0 !important;
  }
  .bgimg{
    background-image: url(${imgUrl});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
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
