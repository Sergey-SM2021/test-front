import { styled } from "styled-components"

export const JustifyContentProvider = {
	spaceBeetwen: "space-beetwen",
	flexStart: "flex-start",
}

export const Flex = styled.div<{
  justifyContent?: keyof typeof JustifyContentProvider;
  vertical?: boolean;
  gap?: number;
}>`
  gap: ${({ gap }) => `${gap}px`};
  display: flex;
  justify-content: ${({ justifyContent }) =>
		justifyContent && JustifyContentProvider[justifyContent]};
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
`
