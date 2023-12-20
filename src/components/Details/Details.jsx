import React from "react";
import styles from "./Details.module.css";

export const Details = ({ closeModal, info }) => {
  const genres = info.genres?.map((genre) => {
    return genre.name;
  });

  return (
    <div
      className={styles.modalBackground}
    >
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
              <div className={styles.modalImage}>
                <img src={info.image} alt="Animanga Image" />
              </div>

              <div className={styles.title}>
                <h2>{info.title}</h2>
                <div className={styles.infoCont2}>
                  <div> {genres && "Genres: " + genres?.join(", ")}</div>
                  <div>
                    <span>Rating: {info.rating}</span>
                  </div>
                  <div>
                    {info.episodes ? <span>N° of episodes: {info.episodes}</span> : <></>}
                    
                  </div>
                  <div>
                    <span>Status: {info.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ overflow: "auto", paddingRight: "20px" }}>
            <span>synopsis:</span>
            <p>{info.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
