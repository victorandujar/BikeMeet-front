import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload, UserCredentials, UserRegisterData } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../types/types";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";

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
  id: "12345678",
};

const mockUserToRegister: UserRegisterData = {
  email: "victor@andujar.org",
  password: "12345678",
  name: "victor",
};

const mockToken = "vik27634fvj";

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

      const mockLoginUser: User = {
        email: mockTokenPayload.email,
        id: mockTokenPayload.id,
        token: mockToken,
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLoginUser));
    });

    test("Then it should call the showErrorToast function", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(userCredentials);

      expect(spy).not.toBeCalled();
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
  });
});
