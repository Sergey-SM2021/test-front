import { styled } from "styled-components"

export const Close = styled.div`
  background-color: #0000000a;
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 100%;
  transition: 0.2;
  &:hover {
    cursor: pointer;
    background-color: #00000014;
  }
  &::before {
    top: 50%;
    right: 50%;
    width: 1px;
    height: 50%;
    position: absolute;
    background-color: #b3b3b3;
    content: "";
    display: block;
    transform: translateY(-50%) rotate(45deg);
  }
  &::after {
    top: 50%;
    right: 50%;
    width: 1px;
    height: 50%;
    position: absolute;
    background-color: #b3b3b3;
    content: "";
    display: block;
    transform: translateY(-50%) rotate(135deg);
  }
`
