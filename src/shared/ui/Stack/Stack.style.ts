import { styled } from "styled-components"

const spaceConfig = {
	md: "16px",
	lg: "24px",
	xl: "48px",
}

const alignItemsConfig = {
	stretch: "stretch",
	start: "flex-start",
	center: "center",
}

const justifyConfig = {
	between: "space-between",
	end: "flex-end",
}

export const Stack = styled.div<{
  vertical?: boolean;
  space?: keyof typeof spaceConfig;
  align?: keyof typeof alignItemsConfig;
  justify?: keyof typeof justifyConfig;
  w?: string;
}>`
  display: flex;
  align-items: ${({ align }) => align && alignItemsConfig[align]};
  gap: ${({ space }) => (space ? spaceConfig[space] : "8px")};
  flex-direction: ${({ vertical }) => vertical && "column"};
  justify-content: ${({ justify }) => justify && justifyConfig[justify]};
  width: ${({ w }) => w};
`
