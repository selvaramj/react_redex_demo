import {
  USER_Login,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from './UserActionTypes';

export const userLogin = () => {
  return {
    type: USER_Login,
    //payload: userDetailes,
  };
};

export const userSuccessLogin = () => {
  return {
    type: USER_LOGIN_SUCCESS,
    // payload: userDetailes,
  };
};

export const userFailedToLogin = (errorDetails) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: errorDetails,
  };
};
