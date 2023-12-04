import React from "react";
import styles from "./Details.module.css";

export const Details = ({ closeModal, info }) => {
  return (
    <div>
      <div>
        <div>
          <button
            type="button"
            onClick={() => {
              closeModal(false);
            }}
          />
        </div>
        <div className={styles.basicInfo}>
          <div>
            <img src={info.image} alt="Animanga Image" />
          </div>
          <div>
            <div>
              <h2>{info.title}</h2>
            </div>
            <div>Genres</div>
            <div>
              <span>{info.rating}</span>
            </div>
            <div>
              <span>{info.episodes}</span>
            </div>
            <div>
              <span>{info.status}</span>
            </div>
          </div>
        </div>
        <div>
          <p>{info.synopsis}</p>
        </div>
      </div>
    </div>
  );
};
