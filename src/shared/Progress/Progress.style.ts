import { styled } from "styled-components";

export const StepWrapper = styled.div`
  display: flex;
`;

export const StepIcon = styled.div`
  background-color: #5558FA;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  z-index: 100;
  position: relative;
`;

export const StepItem = styled.div`
  width: 340px;
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
  &:not(&:first-child):before {
    top: 4px;
    position: absolute;
    background-color: gray;
    display: block;
    content: "";
    height: 8px;
    width: 100%;
    right: 50%;
  }
`;
