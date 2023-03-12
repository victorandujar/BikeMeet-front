import { UiState } from "../../../types/ui/ui";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives a new state and an action to setIsLoading", () => {
    test("Then it should return a new state with the property isLoading set as true", () => {
      const initialUiState: UiState = {
        isLoading: false,
      };
      const expectedUiState: UiState = {
        isLoading: true,
      };

      const setIsLoadingAction = setIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, setIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a new state and the action to unsetIsLoading", () => {
    test("Then it should return a new state with the property isLoading set as false", () => {
      const initialUiState: UiState = {
        isLoading: true,
      };
      const expectedUiState: UiState = {
        isLoading: false,
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, unsetIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });
});
