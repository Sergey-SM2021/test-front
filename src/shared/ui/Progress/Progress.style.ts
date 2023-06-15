import { styled } from "styled-components"

export const StepWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: aliceblue;
`

export const StepIcon = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#5558fa" : "gray")};
  width: 16px;
  height: 16px;
  border-radius: 100px;
  z-index: 100;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
`
