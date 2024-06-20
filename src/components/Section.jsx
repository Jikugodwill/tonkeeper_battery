import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: inherit;
  color: inherit;
  text-align: center;
`;

const Title = styled.h2`
  font-weight: 900;
  font-style: normal;
  font-size: 3vw;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #5FBD80; /* Optional: Change the color to match the theme */
`;

const Section = ({ id, title, subtitle, children }) => {
  return (
    <Wrapper id={id}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Wrapper>
  );
};

export default Section;
