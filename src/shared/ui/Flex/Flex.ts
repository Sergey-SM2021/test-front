import { styled } from "styled-components"

export const Flex = styled.div<{ spaceBeetwen?: boolean }>`
  display: flex;
  justify-content: ${({ spaceBeetwen }) =>
		spaceBeetwen ? "space-between" : "flex-start"};
`
