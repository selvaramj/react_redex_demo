import { func } from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_STATUS_CHECKING,
} from "./UserActionTypes";

export const fetchUserData = (username, password, history) => {
  return function (dispatch) {
    dispatch(userLogin());
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) =>
        dispatch(userStatusChecking(data, username, password))
      )
      .then(() => history.push("/register"))
      .catch((error) => userFailedToLogin(error));
  };
};
export const userLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

export const userStatusChecking = (data, username, password) => {
  let result = null;
  console.log(data);
  result = data.find(
    (user) => user.username == username && user.name == password
  );
  console.log(typeof result, result);
  if (result) return userSuccessLogin(result);
  else return userFailedToLogin("Inavalid Username/Password");
};

export const userSuccessLogin = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const userFailedToLogin = (errorDetails) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: errorDetails,
  };
};
