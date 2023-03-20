import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload, UserCredentials, UserRegisterData } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../types/users/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/usersSlice/usersSlice";
import { openModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { ModalPayload } from "../../types/ui/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

jest.mock("jwt-decode", () => jest.fn());
const spyDispatch = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const userCredentials: UserCredentials = {
  email: "victor@andujar.org",
  password: "dkldjdklsdj",
};

const mockTokenPayload: CustomTokenPayload = {
  email: "victor@andujar.org",
  sub: "12345678",
};

const mockUserToRegister: UserRegisterData = {
  email: "victor@andujar.org",
  password: "12345678",
  name: "victor",
};

const mockToken = "vik27634fvj";

const mockLoginUser: User = {
  email: mockTokenPayload.email,
  id: mockTokenPayload.sub,
  token: mockToken,
};

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await loginUser(userCredentials);

      expect(spyDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockLoginUser)
      );
    });

    test("Then it should call the dispatch with the action openModalActionCreator", async () => {
      const modalPayload: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: "Wrong credentials",
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(spyDispatch).not.toHaveBeenCalledWith(
        loginUserActionCreator(mockLoginUser)
      );
    });
  });

  describe("When the logoutUser function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await logoutUser();

      expect(spyDispatch).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When the registerUser function is called with a name: 'victor', email: 'victor@andujar,org' and password: '12345678'", () => {
    test("Then it should call the dispatch openModal", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser(mockUserToRegister);

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: false,
          message: "The user has been created!",
          isSuccess: true,
        })
      );
    });

    test("Then it should call the dispatch for succes toast", async () => {
      const modalPayload: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "The user has been created!",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser(mockUserToRegister);

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });

  describe("When the response is not ok", () => {
    beforeAll(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should throw an error", async () => {
      const modalPayload: ModalPayload = {
        isError: true,
        message: "Couldn't create user. Try again!",
        isSuccess: false,
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser({
        email: "",
        name: "",
        password: "",
      });

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });
});
