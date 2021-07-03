import React, { useState, useEffect, useMemo, useRef } from 'react';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [qualification, setQualification] = useState('');
  const [others, setOthers] = useState('');
  const [qualificationStatus, setQualificationStatus] = useState('');
  const inputUserFieldRef = useRef();
  useEffect(() => {
    inputUserFieldRef.current.focus();
  }, []);

  const handleNameChange = () => {};

  const handleAgeChange = () => {};

  const handleQualificationChange = () => {};

  const handleStatusChange = () => {};

  return (
    <div>
      <form>
        <fieldset>
          <legend>Identity Form: </legend>
          <div>
            <label htmlFor='username'>Name:</label>
            <br />
            <input
              type='text'
              placeholder='Enter your name'
              id='username'
              name='username'
              autoComplete='off'
              value={name}
              onChange={handleNameChange}
              required
              ref={inputUserFieldRef}
            />
          </div>
          <br />
          <div>
            <label htmlFor='age'>Age:</label>
            <br />
            <input
              type='number'
              placeholder='Enter your age'
              id='age'
              name='age'
              value={age}
              onChange={handleAgeChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='birth-day'>Birth Day:</label>
            <br />
            <input type='date' id='birth-day' name='birthday' />
          </div>
          <br />
          <div>
            <label htmlFor='qualification'>Qualification:</label>
            <br />
            <select name='qualification' id='qualification'>
              <option value='BE'>B.E</option>
              <option value='BTECH'>B.Tech</option>
              <option value='BSC'>BSC</option>
            </select>
          </div>
          <br />
          <fieldset>
            <legend>Selected Qulification Completed status:</legend>
            <div>
              <input type='radio' id='status-yes' name='status' value='' />
              <label htmlFor='status-yes'>Yes,Completed </label>
              <input type='radio' id='status-no' name='status' value='no' />
              <label htmlFor='status-no'>Not,Completed </label>
              <input
                type='radio'
                id='status-others'
                name='status'
                value='others'
              />
              <label htmlFor='status-others'>Others</label>
            </div>
          </fieldset>
          <br />
          <div>
            <button type='submit'>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
