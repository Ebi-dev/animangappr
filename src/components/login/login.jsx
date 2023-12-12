import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/actions/actions";
import styles from "./login.module.css";

export const Login = ({ closeModal }) => {
  const [registerMode, setRegist] = useState(false);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    username: "",
    password: "",
    email: "",
    userinfo: "",
    passwordConfirmation: "",
  });

  function handleChange(e) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (registerMode) {
      dispatch(register(info));
    } else {
      dispatch(login(info));
    }
  }

  const [error, setError] = useState(true);

  useEffect(() => {
    if (
      info.username.length > 4 &&
      info.username.length <= 30 &&
      info.password.length > 3 &&
      info.password.length <= 16 &&
      info.passwordConfirmation !== info.password
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [info, setError]);

  return (
    <div className={styles.loginModalBackground}>
      {!registerMode ? (
        <div className={styles.loginModalContainer}>
          <div>
            <button
              type="button"
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>

          <div>
            <h2>Login</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <h5>Username:</h5>
                <input
                  type="text"
                  name="username"
                  id="1"
                  maxLength={30}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h5>Password:</h5>
                <input
                  type="text"
                  name="password"
                  id="2"
                  maxLength={16}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <div>
              <p>Not a member yet? </p>{" "}
              <p
                onClick={() => {
                  setRegist(true);
                }}
                className={styles.registerButton}
              >
                Register now!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.registerModalContainer}>
          <div>
            <button
              type="button"
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <h5>Username:</h5>
                <input
                  type="text"
                  name="username"
                  id="1"
                  onChange={handleChange}
                />
                <span>{info.username.length} / 35</span>
              </div>
              <div>
                <h5>Password:</h5>
                <input
                  type="text"
                  name="password"
                  id="2"
                  onChange={handleChange}
                />
                <span>{info.password.length} / 35</span>
                <h5>Repeat Password:</h5>
                <input
                  type="text"
                  name="passwordConfirmation"
                  id="3"
                  onChange={handleChange}
                />
                <span>{info.passwordConfirmation.length} / 35</span>
              </div>
              <button type="submit" disabled={error}>
                Register now!
              </button>
            </form>
            <div>
              <p>Already a member? </p>{" "}
              <p
                onClick={() => {
                  setRegist(false);
                }}
                className={styles.registerButton}
              >
                Log-in now!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
