import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload, UserCredentials } from "./types";
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
});
