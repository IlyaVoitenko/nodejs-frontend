import {
  registerUserLoad,
  loginUserLoad,
  logoutUserLoad,
  verifyUserLoad,
  getCurrentUserLoad,
} from "../../api/user";

import {
  initialStateUser,
  userErrorMessage,
  userErrorStatus,
} from "../../../store/Slices/users";

export const getRegisterUser = (data) => {
  return async (dispatch) => {
    try {
      await registerUserLoad(data);
      return dispatch(userErrorStatus(false));
    } catch (error) {
      dispatch(userErrorStatus(true));
      dispatch(userErrorMessage(error));
    }
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const user = await loginUserLoad(data, dispatch);
      dispatch(initialStateUser(user));
      return dispatch(userErrorStatus(false));
    } catch (error) {
      dispatch(userErrorStatus(true));
      dispatch(userErrorMessage(error));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await logoutUserLoad();
      dispatch(initialStateUser({ verify: false }));
      return dispatch(userErrorStatus(false));
    } catch (error) {
      dispatch(userErrorStatus(true));
      dispatch(userErrorMessage(error));
    }
  };
};
