import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (newUser) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: newUser,
});
