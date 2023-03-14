import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import { CustomTokenPayload } from "../useUser/types";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { email, sub: id } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ email, id, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
