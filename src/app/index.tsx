import { createRoot } from "react-dom/client";
import { MainPage } from "../pages/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./app.css";

const router = createBrowserRouter([
  { element: <MainPage />, path: "/" },
  {
    element: <>steps</>,
    path: "/step",
    children: [
      { element: <>step1</>, path: "1" },
      { element: <>step2</>, path: "2" },
      { element: <>step3</>, path: "3" },
    ],
  },
]);

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const Index = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

const root = createRoot(document.getElementById("root") as HTMLInputElement);
root.render(<Index />);
