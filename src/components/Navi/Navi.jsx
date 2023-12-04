import React from "react";
import styles from "./Navi.module.css";

export const Navi = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <button>Home</button>
        <button>opt</button>
      </nav>
    </div>
  );
};
