import { Container } from "../Container/Container.style"
import { LayoutWrapper } from "./Layout.style"
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Container>
			<LayoutWrapper>{children}</LayoutWrapper>
		</Container>
	)
}
