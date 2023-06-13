import { createRoot } from "react-dom/client"
import { RouterProvider } from "./providers/router"
import { ReduxProvider } from "./providers/redux"
import "./style/app.css"

export const Index = () => {
	return (
		<ReduxProvider>
			<RouterProvider />
		</ReduxProvider>
	)
}

const root = createRoot(document.getElementById("root") as HTMLInputElement)
root.render(<Index />)
