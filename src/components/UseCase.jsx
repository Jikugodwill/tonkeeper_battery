import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #212f42f5;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  min-width: 250px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-style: normal;
  font-size: min(2rem, 5vw);
  /* margin-bottom: 1rem; */
  color: #5fbd80;
`;

const UseCase = ({ title, description, className }) => {
  return (
    <Card className={className}>
      <Title>{title}</Title>
      <p className="text">{description}</p>
    </Card>
  );
};

export default UseCase;
