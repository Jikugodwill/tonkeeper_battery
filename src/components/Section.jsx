import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: #ffffff;
  color: #333333;
`;

const Section = ({ id, children }) => {
  return <Wrapper id={id}>{children}</Wrapper>;
};

export default Section;
