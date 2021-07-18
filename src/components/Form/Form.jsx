import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import "../Form/Form.css";
import Radio from "../RadioButton";
const Form = (props) => {
  console.log("Form", props);
  const userName = useSelector((state) => state.user.name);
  const [name, setName] = useState(userName);
  const [age, setAge] = useState(null);
  const [qualification, setQualification] = useState("");
  const [others, setOthers] = useState("");
  const [qualificationStatus, setQualificationStatus] = useState("");
  const qualificationStatusArray = [
    "Yes, completed",
    "No,not completed",
    "Others",
  ];
  const inputUserFieldRef = useRef();
  useEffect(() => {
    inputUserFieldRef.current.focus();
  }, []);

  const handleNameChange = () => {};

  const handleAgeChange = () => {};

  const handleQualificationChange = () => {};

  const handleStatusChange = () => {};

  return (
    <div className="register-wrapper">
      <div className="register-form">
        <form>
          <fieldset>
            <legend>Registration Form: </legend>
            <div>
              <label className="label" htmlFor="username">
                Name:
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                id="username"
                name="username"
                autoComplete="off"
                value={name}
                onChange={handleNameChange}
                required
                ref={inputUserFieldRef}
              />
            </div>
            <br />
            <div>
              <label className="label" htmlFor="age">
                Age:
              </label>
              <br />
              <input
                type="number"
                placeholder="Enter your age"
                id="age"
                name="age"
                value={age}
                onChange={handleAgeChange}
                required
              />
            </div>
            <br />
            <div>
              <label className="label" htmlFor="birth-day">
                Birth Day:
              </label>
              <br />
              <input type="date" id="birth-day" name="birthday" />
            </div>
            <br />
            <div>
              <label className="label" htmlFor="qualification">
                Qualification:
              </label>
              <br />
              <select name="qualification" id="qualification">
                <option value="BE">B.E</option>
                <option value="BTECH">B.Tech</option>
                <option value="BSC">BSC</option>
              </select>
            </div>
            <br />
            <fieldset>
              <legend>Selected Qulification Completed status:</legend>
              <div>
                <Radio
                  value="yes"
                  onChange={setQualificationStatus}
                  selected={qualificationStatus}
                  text={qualificationStatusArray[0]}
                />
                <Radio
                  value="no"
                  onChange={setQualificationStatus}
                  selected={qualificationStatus}
                  text={qualificationStatusArray[1]}
                />
                <Radio
                  value="others"
                  onChange={setQualificationStatus}
                  selected={qualificationStatus}
                  text={qualificationStatusArray[2]}
                />
              </div>
            </fieldset>
            <br />
            <div>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.user };
};

export default connect(mapStateToProps, null)(Form);
