import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../reducers/RootReducer';
export const store = configureStore({
  reducer,
});
