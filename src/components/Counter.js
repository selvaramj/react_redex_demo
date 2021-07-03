import React, { useState } from 'react';
import {
  increment,
  decrement,
  incrementByGivenNumber,
} from '../reducers/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.counterValue);
  const [incrementValue, setIncrementValue] = useState('2');

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{value}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
