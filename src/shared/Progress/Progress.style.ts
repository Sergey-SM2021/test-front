import { styled } from "styled-components";

export const StepWrapper = styled.div`
  display: flex;
`;

export const StepIcon = styled.div<{ isActive: boolean }>`
  background-color: #5558fa;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  z-index: 100;
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    width: 5px;
    height: 5px;
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    content: "";
  }
`;

export const StepItem = styled.div<{ isActive: boolean }>`
  width: 340px;
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
  &:not(&:first-child):before {
    top: 4px;
    position: absolute;
    background-color: ${({ isActive }) => (isActive ? "#5558fa" : "gray")};
    display: block;
    content: "";
    height: 8px;
    width: 100%;
    right: 50%;
  }
`;
