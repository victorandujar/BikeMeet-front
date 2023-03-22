import App from "../components/App/App";
import endpoints from "./types";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { lazy } from "react";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import DetailPage from "../Pages/DetailPage/DetailPage";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const PrivatePage = lazy(() => import("../Pages/PrivatePage/PrivatePage"));
const CreatePage = lazy(() => import("../Pages/CreatePage/CreatePage"));

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
      {
        path: endpoints.detail,
        element: <ProtectedRoute element={<DetailPage />} />,
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
