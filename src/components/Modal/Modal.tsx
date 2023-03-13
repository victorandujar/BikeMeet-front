import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../../modals/modals";
import { closeModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, isSuccess, message },
  } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      showErrorToast(message);
    }

    if (isSuccess) {
      showSuccessToast(message);
    }
    dispatch(closeModalActionCreator());
  }, [dispatch, isError, isSuccess, message]);

  return <ToastContainer />;
};

export default Modal;
