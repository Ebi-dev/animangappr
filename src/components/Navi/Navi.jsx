import React from "react";
import styles from "./Navi.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Login } from "../login/Login";
import { auth } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const Navi = () => {
  const State = useSelector((state) => state);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);

  async function checkLogged() {
    setLoggedIn(await dispatch(auth()));
  }

  useEffect(() => {
    checkLogged();
  }, []);


  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    cookies.remove("refreshToken");
    checkLogged();
  };

  return (
    <div>
      <nav className={styles.nav}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button>opt</button>
        {!loggedIn && (
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Login
          </button>
        )}

        {loggedIn && <span>logged in as {State.currentUser}!</span>}
        {loggedIn && <button onClick={handleLogout}>Log out</button>}
      </nav>
      {openModal && (
        <Login closeModal={setOpenModal} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};
