import React from "react";
import styles from "./ResultCards.module.css";

export const ResultCards = ({
  title,
  url,
  rating,
  synopsis,
  genres,
  image,
  episodes,
  status,
  id,
}) => {
  if (!image) {
    image =
      "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.picCont}>
        <img src={image} alt={title + "image"} className={styles.pic} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.auxInfoCont}>
          <div>
            <p>{genres == "" ? "N/A" : genres.join(", ")}</p>
          </div>
          <div>
            <p>{episodes} episodes</p>
          </div>
          <div>
            <p>{status}</p>
          </div>
        </div>
        <div className={styles.synopsis}>
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
};
