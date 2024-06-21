import styled from "styled-components";

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #5fbd80;
    transform: translateX(-50%);
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};
  padding: 1rem 0;
  position: relative;
  width: 100%;

  &:nth-child(odd) {
    justify-content: flex-start;
  }

  &:nth-child(even) {
    justify-content: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    background-color: #5fbd80;
    border-radius: 50%;
    border: 4px solid #ffffff;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const TimelineContent = styled.div`
  background: #212f42f5;
  color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  max-width: 48%;
  width: auto;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    transform: translateY(-50%);
    ${({ align }) =>
      align === "left"
        ? `
          left: 100%;
          border-width: 8px 0 8px 8px;
          border-color: transparent transparent transparent #5FBD80;
        `
        : `
          right: 100%;
          border-width: 8px 8px 8px 0;
          border-color: transparent #5FBD80 transparent transparent;
        `}
  }
`;

export const PhaseTitle = styled.div`
  background-color: #5fbd80;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & > li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    & > svg {
      margin-right: 0.5rem;
    }
  }
`;
