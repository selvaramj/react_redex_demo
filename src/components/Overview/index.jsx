import React from 'react';
import { useHistory } from 'react-router-dom';

const Overview = (props) => {
  const history = useHistory();

  const clickBackHandler = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Hi {props.name}</h1>
      <button onClick={clickBackHandler}>Back</button>
    </div>
  );
};

export default Overview;
