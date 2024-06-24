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
  .hero{
    background-color: inherit;
  color: inherit;
  text-align: center;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 1rem 0;
  align-items: center;
  line-height: 180%;
  }
  .sideAsset{
    width: 50%;
  }
  .sideAsset img{
    width: 80%;
  }
  .text{
    opacity: 0.7;
  }

  
  .burgerIcon{
    display: none;
  
  }
  .use-cases>.content{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 18px;
  }

  .use-cases .div1 { 
    grid-area: 1 / 3 / 5 / 5;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    padding: 1rem;
    text-align: left;
   }
   .use-cases .div1 div{
    margin: 1rem 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
   }
  .use-cases .div2 { 
    grid-area: 1 / 1 / 3 / 3;
    }
  .use-cases .div3 { 
    grid-area: 3 / 1 / 5 / 2;
    background: transparent;
    border: 1px solid #5FBD80;
    }
  .use-cases .div4 { 
    background: #fff;
    color: #000;
    grid-area: 3 / 2 / 5 / 3;
    }
  .cta>.content{
    display: flex;
    position: relative;
    padding: 72px 48px;
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

  .cta h3{
    font-size: min(2.5rem, 5vw);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .cta p{
    margin-bottom: 1rem;
    max-width: 320px;
  }
  @media only screen and (max-width: 768px) {
    .how-it-works{
      width: 80% !important;
    }
    .burgerIcon{
      display: block;
      cursor: pointer;
    }
    .cta>.content{
      padding: 48px 24px;
      text-align: center;
    }
    .cta p{
      width: 100%;
    }
    .hero{
      flex-direction: column;
      row-gap: 2rem;
    }
    .hero .hero-rhs{
      width: 100% !important;
    }
    .sideAsset{
      width: 100%;
    }
  }
  @media only screen and (max-width: 992px) {
    .use-cases .div1{
      grid-area: 3 / 1 / 5 / 5;
    }
    .use-cases .div2 { grid-area: 1 / 1 / 2 / 5; }
    .use-cases .div3 { grid-area: 2 / 1 / 3 / 3; }
    .use-cases .div4 { grid-area: 2 / 3 / 3 / 5; }
  }
  @media only screen and (max-width: 586px) {
    .use-cases .div1 { grid-area: 4 / 1 / 5 / 5; }
    .use-cases .div2 { grid-area: 1 / 1 / 2 / 5; }
    .use-cases .div3 { grid-area: 2 / 1 / 3 / 5; }
    .use-cases .div4 { grid-area: 3 / 1 / 4 / 5; }
  }
`;

export default GlobalStyles;
