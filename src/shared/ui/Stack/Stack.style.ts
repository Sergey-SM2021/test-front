import { styled } from "styled-components"

const spaceConfig = {
	md: "16px",
} as const

export const Stack = styled.div<{
  vertical?: boolean;
  space?: keyof typeof spaceConfig;
}>`
  display: flex;
  gap: ${({ space }) => (space ? spaceConfig[space] : "8px")};
  flex-direction: ${({ vertical }) => vertical && "column"};
`
