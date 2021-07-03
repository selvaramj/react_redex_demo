import { combineReducers } from 'redux';
import { userReducer } from '../actions/User/UserReducer';
import counterReducer from '../reducers/CounterSlice';

export const reducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});
