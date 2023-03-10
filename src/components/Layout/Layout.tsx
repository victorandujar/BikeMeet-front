import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ToastContainer hideProgressBar />
      <Outlet />
    </>
  );
};

export default Layout;
