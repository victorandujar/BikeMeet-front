import { useAppDispatch } from "../../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UserRegisterData,
} from "./types";
import decodeToken from "jwt-decode";
import { User } from "../../types/users/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/usersSlice/usersSlice";
import useToken from "../useToken/useToken";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const { removeToken } = useToken();

  const apiUrl = process.env.REACT_APP_URL_API!;
  const usersEndPoint = "/users";
  const loginEndPoint = "/login";
  const registerEndPoint = "/register";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        `${apiUrl}${usersEndPoint}${loginEndPoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { sub: id, email } = tokenPayload;

      const userLogin: User = { email, id, token };

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch (error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Wrong credentials",
          isSuccess: false,
        })
      );
      dispatch(unsetIsLoadingActionCreator());
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  const registerUser = async (registerUserData: UserRegisterData) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndPoint}${registerEndPoint}`,
        {
          method: "POST",
          body: JSON.stringify(registerUserData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Couldn't create user. Try again!");
      }

      dispatch(
        openModalActionCreator({
          isError: false,
          message: "The user has been created!",
          isSuccess: true,
        })
      );
    } catch (error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Couldn't create user. Try again!",
          isSuccess: false,
        })
      );
      return (error as Error).message;
    }
  };

  return { loginUser, registerUser, logoutUser };
};

export default useUser;
