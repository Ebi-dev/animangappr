import React from "react";
import styles from "./Card.module.css";

export const Card = ({
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
    <div className={styles.card}>
      <img src={image} alt="Anime-Image" className={styles.img} />

      <div>
        <h5>{title}</h5>
        <span>{genres?.join(", ")}</span>
      </div>
    </div>
  );
};
