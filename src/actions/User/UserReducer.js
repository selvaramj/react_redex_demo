import { USER_Login, USER_LOGIN_SUCCESS } from './UserActionTypes';

const initialState = {
  name: '',
  userDatas: '',
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_Login:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
