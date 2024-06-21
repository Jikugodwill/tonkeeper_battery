import React, { useState, useEffect, useRef } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/tonkeeperbatterylogo.jpg";
import { Button } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
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
    flex-direction: row;
    justify-content: space-between;
  }

  nav {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      position: absolute;
      top: 60px;
      right: 1rem;
      flex-direction: column;
      background-color: #101721;
      padding: 1rem;
      border: 1px solid #494949;
      border-radius: 8px;
    }

    a {
      margin: 0 1rem;
      color: #ffffff;
      text-decoration: none;
      transition: color 0.3s;
      cursor: pointer;

      @media (max-width: 768px) {
        margin: 0.5rem 0;
        width: 100%;
        padding: 0.5rem 0;
        border-bottom: 1px solid #494949;

        &:last-child {
          border-bottom: none;
        }
      }
    }

    a:hover {
      color: #5fbd80;
    }
  }

  button {
    background: #212f42f5;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }
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

const BurgerIcon = styled(MenuIcon)`
  color: #ffffff;
`;

const CloseMenuIcon = styled(CloseIcon)`
  color: #ffffff;
`;

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header isOpen={menuOpen}>
          <div
            style={{ display: "flex", alignItems: "center", fontWeight: "600" }}
          >
            <img src={logo} width={70} alt="Tonkeeper" />
            <span>Tonkeeper Battery</span>
          </div>
          <nav ref={menuRef}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="support"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
          <Button
            style={{ backgroundColor: "#212f42f5", color: "#ffffff" }}
            whileTap={{ scale: 0.9 }}
          >
            Update Tonkeeper
          </Button>
          <div className="burgerIcon">
            {menuOpen ? (
              <CloseMenuIcon onClick={toggleMenu} />
            ) : (
              <BurgerIcon onClick={toggleMenu} />
            )}
          </div>
        </Header>
        <Main>{children}</Main>
        <Footer>© 2024 Tonkeeper. All rights reserved.</Footer>
      </Container>
    </>
  );
};

export default Layout;
