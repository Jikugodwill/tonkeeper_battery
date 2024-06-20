import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  background: linear-gradient(135deg, #0a0a0a, #2b2b2b);
  color: #ffffff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #1f1f1f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  nav a {
    margin: 0 1rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
  }

  nav a:hover {
    color: #00bcd4;
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

const Main = styled.main`
  padding: 2rem 0;
`;

const Footer = styled.footer`
  padding: 1rem 0;
  text-align: center;
  background-color: #1f1f1f;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <div>Tonkeeper Logo</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#get-started">Get Started</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <button>Update Tonkeeper</button>
        </Header>
        <Main>{children}</Main>
        <Footer>© 2024 Tonkeeper. All rights reserved.</Footer>
      </Container>
    </>
  );
};

export default Layout;
