import React from "react";
import styles from "./Details.module.css";

export const Details = ({ closeModal, info }) => {
  return (
    <div className={styles.modalBackground}>
      .
      <div className={styles.modalContainer}>
        <div className={styles.closeBtn}>
          <button
            type="button"
            onClick={() => {
              closeModal(false);
            }}
          >X
          </button>
        </div>
        <div className={styles.basicInfo}>
          <div>
            <img src={info.image} alt="Animanga Image" />
          </div>
          <div>
            <div>
              <h2>{info.title}</h2>
            </div>
            <div>
              [genres]
            </div>
            <div>
              <span>Rating: {info.rating}</span>
            </div>
            <div>
              <span>N° of episodes: {info.episodes}</span>
            </div>
            <div>
              <span>Status: {info.status}</span>
            </div>
          </div>
        </div>
        <div>
          <span>synopsis:</span>
          <p>{info.synopsis}</p>
        </div>
      </div>
      .
    </div>
  );
};
