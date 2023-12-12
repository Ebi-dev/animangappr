import React from "react";
import styles from "./Navi.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navi = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

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
        <button>Login</button>
      </nav>
      {openModal && (
        <div className={styles.testbg}>
          <div className={styles.test}> aaaa</div>
        </div>
      )}
    </div>
  );
};
