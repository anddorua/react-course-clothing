import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (newUser) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: newUser,
});

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});
export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
});
export const emailSignInStart = (email, password) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
});
export const signInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
  payload: error,
});
