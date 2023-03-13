import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <>
      <Header />
      <ToastContainer hideProgressBar />
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
