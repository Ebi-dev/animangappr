import React from "react";
import styles from "./Details.module.css";

export const Details = ({ closeModal, info }) => {

  const genres = info.genres?.map((genre) => {return genre.name;})

  return (
    <div className={styles.modalBackground}>
      <div
        className={styles.modalBg}
        style={{
          backgroundImage: `url(${info.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.modalContainer}>
          <div className={styles.closeBtn}>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>
          <div>
            <div className={styles.infoCont1}>
              <img src={info.image} alt="Animanga Image" />
              <div className={styles.title}>
                <h2>{info.title}</h2>
              </div>
            </div>
            <div className={styles.infoCont2}>
              <div> {genres && "Genres: " + genres?.join(", ")}</div>
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
          <div style={{ overflow: "auto" }}>
            <span>synopsis:</span>
            <p>{info.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
