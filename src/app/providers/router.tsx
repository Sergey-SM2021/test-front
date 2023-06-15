import { MainPage } from "pages/MainPage/ui/MainPage"
import {
	createBrowserRouter,
	RouterProvider as BrowserRouterProvider,
	Outlet,
} from "react-router-dom"
import { Container } from "shared/ui/Container/Container.style"
import { ProgressBar } from "widgets/stepWidget"
import { Page1 } from "pages/StepPage/Page1/Page1"
import { Page2 } from "pages/StepPage/Page2/ui/Page2"
import { Page3 } from "pages/StepPage/Page3/Page3"

const router = createBrowserRouter([
	{ element: <MainPage />, path: "/" },
	{
		element: (
			<Container>
				<ProgressBar />
				<Outlet />
			</Container>
		),
		path: "/step",
		children: [
			{ path: "1", element: <Page1 /> },
			{ path: "2", element: <Page2 /> },
			{ path: "3", element: <Page3 /> },
		],
	},
])

export const RouterProvider = () => {
	return <BrowserRouterProvider router={router} />
}
