import { User, UserState } from "../../../types/types";
import { loginUserActionCreator, userReducer } from "./usersSlice";

const initialState: UserState = {
  email: "",
  isLogged: false,
  token: "",
  id: "",
};

describe("Given a usersReducer", () => {
  describe("When it receives a new state and an action to log in the user", () => {
    test("Then it should return the user with its isLogged property set as true", () => {
      const user: User = {
        email: "victor@andujar.org",
        token: "asdgfsfdgdsfhgdfghdfgh",
        id: "",
      };

      const expectedUserState: UserState = {
        email: "victor@andujar.org",
        token: "asdgfsfdgdsfhgdfghdfgh",
        id: "",
        isLogged: true,
      };

      const loginAction = loginUserActionCreator(user);

      const newUserState = userReducer(initialState, loginAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
