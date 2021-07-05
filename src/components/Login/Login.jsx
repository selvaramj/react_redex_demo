import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { useHistory } from "react-router-dom";
import CupLogo from "../Login/VectorImage.png";
import { LoadingSign } from "../Loading/index";
import ReactDom from "react-dom";
import { fetchUserData } from "../../actions/User/UserActionCreators";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const user = useSelector((state) => state.user.name);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (value) => {
    setUserName(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleSubmit = (event) => {
    console.log("form submit" + userName + password);
    event.preventDefault();
    if (!userName || !password) {
    } else {
      dispatch(fetchUserData(userName, password, history));
      console.log("Username", user);
    }
  };
  return (
    <main className="login-wrapper row">
      <div className="login-col-6 card form-wrapper">
        <h1>
          Grow More <span class="tick-emoji">✔</span>
        </h1>
        <br />
        <p className="des">Get your job soon.. All the Best 💥</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <legend class="form-title">Login Here..</legend>
            <div className="form-field">
              <label className="label" htmlFor="username">
                User Name:
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                id="username"
                value={userName}
                onChange={(e) => handleUserNameChange(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="">
                Password:
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
              />
            </div>
            <div className="form-field button-row">
              <button type="submit" className="button submit-btn">
                Log In
              </button>
              <button type="button" className="button register-btn">
                Register
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="login-col-6 img-card">
        <img src={CupLogo} alt="winner-cup logo" class="cup-img" />
        <h3>Don't give up...🔥</h3>
        <div class="rotation">
          <i class="fab fa-searchengin"></i>
        </div>
      </div>
    </main>
  );
};
