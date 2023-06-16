import { createRoot } from "react-dom/client"
import { RouterProvider } from "./providers/router"
import { ReduxProvider } from "./providers/redux"
import "./style/app.css"
import { WithTheme } from "./providers/theme"

export const Index = () => {
	return (
		<ReduxProvider>
			<WithTheme>
				<RouterProvider />
			</WithTheme>
		</ReduxProvider>
	)
}

const root = createRoot(document.getElementById("root") as HTMLInputElement)
root.render(<Index />)
