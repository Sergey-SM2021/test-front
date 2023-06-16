import { styled } from "styled-components"

const Variant = {
	solid: "#5558fa",
	ghost: "transparent",
} as const

const Border = {
	solid: "none",
	ghost: "1px solid #5558fa",
}

const Color = {
	solid: "#fff",
	ghost: "#5558fa",
}

interface IButton {
  variant: keyof typeof Variant;
  h?: number;
  w?: number;
}

export const Button = styled.button<IButton>`
  padding: 16px 12px;
  color: ${({ variant }) => Color[variant]};
  background-color: ${({ variant }) => Variant[variant]};
  border: ${({ variant }) => Border[variant]};
  border-radius: 4px;
  height: ${({ h }) => `${h}px`};
  width: ${({ w }) => `${w}px`};
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`
