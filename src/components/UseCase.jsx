import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #212f42f5;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  min-width: 250px;

`;

const UseCase = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p className="text">{description}</p>
    </Card>
  );
};

export default UseCase;
