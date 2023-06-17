import { styled } from "styled-components"
import { BaseStyle } from "../BaseStyle/BaseStyle"

export const InputField = styled.input<{ disabled?: boolean }>`
  ${BaseStyle}
  background-color: ${({ disabled }) => (disabled ? "#0000000a" : "#fff")};
`