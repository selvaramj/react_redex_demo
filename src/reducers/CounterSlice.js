import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
  counterValue: 0,
};
const slice = createSlice({
  name: 'Counter',
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    incrementByGivenNumber: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export const { increment, decrement, incrementByGivenNumber } = slice.actions;

export default slice.reducer;
