import { MainPage } from "../../pages/MainPage/ui/MainPage";
import {
  createBrowserRouter,
  RouterProvider as BrowserRouterProvider,
} from "react-router-dom";
import { StepPage } from "../../pages/StepPage/Step";

const router = createBrowserRouter([
  { element: <MainPage />, path: "/" },
  {
    element: <StepPage />,
    path: "/step",
    children: [
      { element: <>step1</>, path: "1" },
      { element: <>step2</>, path: "2" },
      { element: <>step3</>, path: "3" },
    ],
  },
]);

export const RouterProvider = () => {
  return <BrowserRouterProvider router={router} />;
};
