import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #212f42f5;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

const UseCase = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default UseCase;
