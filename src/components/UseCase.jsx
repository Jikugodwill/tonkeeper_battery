import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  margin-bottom: 2rem;
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
