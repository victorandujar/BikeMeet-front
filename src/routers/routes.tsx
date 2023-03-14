import App from "../components/App/App";
import LoginPage from "../Pages/LoginPage/LoginPage";
import endpoints from "./types";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/HomePage/HomePage";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: endpoints.login, element: <LoginPage /> },
      { path: endpoints.register, element: <RegisterPage /> },
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.mySpace, element: <PrivatePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
