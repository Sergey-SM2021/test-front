import { MainPage } from "../../pages/MainPage/ui/MainPage"
import {
	createBrowserRouter,
	RouterProvider as BrowserRouterProvider,
} from "react-router-dom"
import { StepPage } from "../../pages/StepPage/StepPage/Step"

const router = createBrowserRouter([
	{ element: <MainPage />, path: "/" },
	{
		element: <StepPage />,
		path: "/step/:step",
	},
])

export const RouterProvider = () => {
	return <BrowserRouterProvider router={router} />
}
