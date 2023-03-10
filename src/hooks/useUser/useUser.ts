import { useAppDispatch } from "../../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UserRegisterData,
} from "./types";
import decodeToken from "jwt-decode";
import { User } from "../../types/types";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";
import { showErrorToast, showSuccessToast } from "../../modals/modals";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  registerUser: (registerUserData: UserRegisterData) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API!;
  const usersEndPoint = "/users";
  const loginEndPoint = "/login";
  const registerEndPoint = "/register";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
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

      const { id, email } = tokenPayload;

      const userLogin: User = { email, id, token };

      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch {
      showErrorToast("Invalid credentials");
    }
  };

  const registerUser = async (registerUserData: UserRegisterData) => {
    try {
      await fetch(`${apiUrl}${usersEndPoint}${registerEndPoint}`, {
        method: "POST",
        body: JSON.stringify(registerUserData),
        headers: { "Content-Type": "application/json" },
      });

      showSuccessToast("Your account has been created");
    } catch {
      showErrorToast("Something went wrong. Try again!");
    }
  };

  return { loginUser, registerUser };
};

export default useUser;
