import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/tonkeeperbatterylogo.jpg";

const Container = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  /* padding: 0 1rem; */
  background: #101721;
  color: #ffffff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #494949;
  position: sticky;
  top: 0;
  background: #101721;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  nav a {
    margin: 0 1rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;
  }

  nav a:hover {
    color: #5fbd80;
  }

  button {
    background: #212f42f5;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  button:hover {
    background: #5fbd80;
  }
`;

const Main = styled.main`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  color: inherit;
`;

const Footer = styled.footer`
  padding: 1rem 0;
  text-align: center;
  background-color: #101721;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <img src={logo} width={70} alt="Tonkeeper" />
          <nav>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="how-it-works" smooth={true} duration={500}>
              How It Works
            </Link>
            <Link to="get-started" smooth={true} duration={500}>
              Get Started
            </Link>
            <Link to="faq" smooth={true} duration={500}>
              FAQ
            </Link>
          </nav>
          <motion.button whileTap={{ scale: 0.9 }}>
            Update Tonkeeper
          </motion.button>
        </Header>
        <Main>{children}</Main>
        <Footer>© 2024 Tonkeeper. All rights reserved.</Footer>
      </Container>
    </>
  );
};

export default Layout;
