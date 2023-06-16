import { MainPage } from "pages/MainPage/ui/MainPage"
import {
	createBrowserRouter,
	RouterProvider as BrowserRouterProvider,
	Outlet,
} from "react-router-dom"
import { ProgressBar } from "widgets/stepWidget"
import { Page1 } from "pages/Page1/Page1"
import { Page2 } from "pages/Page2/ui/Page2"
import { Page3 } from "pages/Page3/Page3"
import { Layout } from "shared/ui/Layout/Layout"
import { StepControll } from "widgets/stepControll"
import { PageWrapper } from "shared/ui/PageWrapper/PageWrapper.style"

const router = createBrowserRouter([
	{ element: <MainPage />, path: "/" },
	{
		element: (
			<Layout>
				<ProgressBar />
				<PageWrapper>
					<Outlet />
				</PageWrapper>
			</Layout>
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
