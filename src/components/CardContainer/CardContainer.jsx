import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import styles from "./CardContainer.module.css";
import { getById } from "../../redux/actions/actions";

export const CardContainer = ({ info, openModal }) => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const State = useSelector((state) => state);

  let handleHide = () => {
    setHidden(!hidden);
  };

  let displayed;
  if (typeof info !== "undefined") {
    displayed = info.slice(0, 8);
  }

  let selectAnimanga = async (anime) => {
    await dispatch(getById(anime.id));
    openModal(true);
  };

  return (
    <div className={styles.containerContainer}>
      <div className={styles.container}>
        <ul className={styles.cards}>
          {displayed &&
            displayed.map((anime) => {
              return (
                <li key={anime.id} onClick={function (){selectAnimanga(anime)}} >
                  <Card
                    title={anime.title}
                    url={anime.url}
                    rating={anime.rating}
                    synopsis={anime.synopsis}
                    genres={anime.genres?.map((genre) => {
                      return genre.name;
                    })}
                    image={anime.image}
                    episodes={anime.episodes}
                    status={anime.status}
                    id={anime.id}
                  />
                </li>
              );
            })}
        </ul>
        <ul className={hidden ? styles.hiddenCards : styles.cards}>
          {info &&
            info.map((anime, index) => {
              if (index >= 8) {
                return (
                  <div>
                    <li key={anime.id} onClick={function (){selectAnimanga(anime)}}>
                      <Card
                        title={anime.title}
                        url={anime.url}
                        rating={anime.rating}
                        synopsis={anime.synopsis}
                        genres={anime.genres?.map((genre) => {
                          return genre.name;
                        })}
                        image={anime.image}
                        episodes={anime.episodes}
                        status={anime.status}
                        id={anime.id}
                      />
                    </li>
                  </div>
                );
              }
            })}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleHide}>
          {hidden ? "+" : "-"}
        </button>
      </div>
    </div>
  );
};
