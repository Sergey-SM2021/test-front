import { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

export const theme = {
	blue: "#5558FA",
	grayLight: "#00000014",
	gray: "#A6A6A6"
}

export const WithTheme = ({ children }: PropsWithChildren) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
