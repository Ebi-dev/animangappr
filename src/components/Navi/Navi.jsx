import React from "react";
import styles from "./Navi.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import {Login} from "../login/Login"

export const Navi = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const cookies = new Cookies();

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
        <button onClick={() => {setOpenModal(true)}}>Login</button>
      </nav>
      {openModal && (
          <Login closeModal={setOpenModal} />
      )}
    </div>
  );
};
