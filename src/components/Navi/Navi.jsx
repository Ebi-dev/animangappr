import React from "react";
import styles from "./Navi.module.css";
import { useNavigate } from "react-router-dom";

export const Navi = () => {

  const navigate = useNavigate();

  return (
    <div>
      <nav className={styles.nav}>
        <button onClick={()=>{navigate("/")}} >Home</button>
        <button>opt</button>
      </nav>
    </div>
  );
};
