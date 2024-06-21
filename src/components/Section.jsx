import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem 0;
  background-color: inherit;
  color: inherit;
  text-align: center;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
`;

const Title = styled.h2`
  font-weight: 900;
  font-style: normal;
  font-size: /*3vw*/ min(2.5rem, 5vw);
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #5fbd80; /* Optional: Change the color to match the theme */
`;

const Section = ({ id, title, subtitle, style, className, children }) => {
  return (
    <Wrapper id={id} style={style} className={className}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default Section;
