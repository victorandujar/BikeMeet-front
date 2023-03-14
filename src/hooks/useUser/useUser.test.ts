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
import { ModalPayload } from "../../types/ui/ui";

jest.mock("jwt-decode", () => jest.fn());
const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

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

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLoginUser));
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

      expect(spy).toHaveBeenCalledWith(openModalActionCreator(modalPayload));
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(spy).not.toHaveBeenCalledWith(
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

      expect(spy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When the registerUser function is called with a name: 'victor', email: 'victor@andujar,org' and password: '12345678'", () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
    });

    test("Then a request should be sent to the data base", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser(mockUserToRegister);

      expect(global.fetch).toHaveBeenCalledWith(
        `${process.env.REACT_APP_URL_API}/users/register`,
        {
          method: "POST",
          body: JSON.stringify(mockUserToRegister),
          headers: { "Content-Type": "application/json" },
        }
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

      expect(spy).toHaveBeenCalledWith(openModalActionCreator(modalPayload));
    });
  });
});
