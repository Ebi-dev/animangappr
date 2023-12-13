import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/actions/actions";
import styles from "./login.module.css";

export const Login = ({ closeModal, setLoggedIn }) => {
  const [registerMode, setRegist] = useState(false);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    username: "",
    password: "",
    email: "",
    userinfo: "",
    passwordConfirmation: "",
    seePassword: false,
  });

  function handleChange(e) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleHide(e) {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: !info.seePassword,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (registerMode) {
      dispatch(register(info));
    } else {
      if (dispatch(login(info))) {
        setLoggedIn(true);
        closeModal(false);
      } else {
        alert("wrong username and/or password!");
      }
    }
  }

  const [error, setError] = useState(true);

  useEffect(() => {
    if (
      info.username.length > 4 &&
      info.username.length <= 30 &&
      info.password.length > 3 &&
      info.password.length <= 16 &&
      info.passwordConfirmation === info.password
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
                {!info.seePassword ? (
                  <input
                    type="password"
                    name="password"
                    id="2"
                    maxLength={16}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="password"
                    id="2"
                    maxLength={16}
                    onChange={handleChange}
                  />
                )}
                {!info.seePassword ? (
                  <button type="button" name="seePassword" onClick={handleHide}>
                    ver
                  </button>
                ) : (
                  <button type="button" name="seePassword" onClick={handleHide}>
                    ocultar
                  </button>
                )}
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
                  maxLength={30}
                  id="1"
                  onChange={handleChange}
                />
                <span>{info.username.length} / 30</span>
                <br />
                {error && info.username.length < 5 ? (
                  <span style={{ color: "red", fontSize: ".7rem" }}>
                    ⚠ Username must be between 5 and 30 characters long! ⚠
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <h5>Password:</h5>
                {!info.seePassword ? (
                  <input
                    type="password"
                    name="password"
                    maxLength={16}
                    id="2"
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="password"
                    maxLength={16}
                    id="2"
                    onChange={handleChange}
                  />
                )}
                <span>{info.password.length} / 16</span>
                {!info.seePassword ? (
                  <button type="button" name="seePassword" onClick={handleHide}>
                    ver
                  </button>
                ) : (
                  <button type="button" name="seePassword" onClick={handleHide}>
                    ocultar
                  </button>
                )}
                <br />
                {error && info.password.length < 4 ? (
                  <span style={{ color: "red", fontSize: ".7rem" }}>
                    ⚠ Password must be between 4 and 16 characters long! ⚠
                  </span>
                ) : (
                  <></>
                )}
                <h5>Repeat Password:</h5>
                {!info.seePassword ? (
                  <input
                    type="password"
                    name="passwordConfirmation"
                    maxLength="16"
                    id="3"
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="passwordConfirmation"
                    maxLength="16"
                    id="3"
                    onChange={handleChange}
                  />
                )}

                <span>{info.passwordConfirmation.length} / 16</span>
                <br />
                {error && info.passwordConfirmation.length < 4 ? (
                  <span style={{ color: "red", fontSize: ".7rem" }}>
                    ⚠ Password must be between 4 and 16 characters long! ⚠
                  </span>
                ) : (
                  <></>
                )}
                <br />
                {error && info.password !== info.passwordConfirmation ? (
                  <span style={{ color: "red", fontSize: ".7rem" }}>
                    ⚠ Passwords must match! ⚠
                  </span>
                ) : (
                  <></>
                )}
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
