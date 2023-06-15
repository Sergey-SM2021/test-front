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
}

export const Button = styled.button<IButton>`
  padding: 16px 12px;
  color: ${({ variant }) => Color[variant]};
  background-color: ${({ variant }) => Variant[variant]};
  border: ${({ variant }) => Border[variant]};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`