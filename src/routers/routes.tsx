import App from "../components/App/App";
import LoginPage from "../Pages/LoginPage/LoginPage";
import endpoints from "./types";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/HomePage/HomePage";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import CreatePage from "../Pages/CreatePage/CreatePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: endpoints.login, element: <LoginPage /> },
      { path: endpoints.register, element: <RegisterPage /> },
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      {
        path: endpoints.mySpace,
        element: <ProtectedRoute element={<PrivatePage />} />,
      },
      {
        path: endpoints.create,
        element: <ProtectedRoute element={<CreatePage />} />,
      },
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
