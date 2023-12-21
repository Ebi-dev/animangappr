import React from "react";
import styles from "./Details.module.css";
import { auth, addFav } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const Details = ({ closeModal, info }) => {
  const genres = info.genres?.map((genre) => {
    return genre.name;
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();

  async function checkLogged() {
    setLoggedIn(await dispatch(auth()));
  }

  useEffect(() => {
    checkLogged();
  }, []);

  async function handleAddFavorite(id) {
    let user = await dispatch(auth());
    console.log("anime id: " + id + "userID: " + user.id);
    dispatch(addFav(id, user.id));
  }

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
                    {info.episodes ? (
                      <span>N° of episodes: {info.episodes}</span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <span>Status: {info.status}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleAddFavorite(info.id);
                      }}
                      disabled={!loggedIn}
                    >
                      Add to Favorites
                    </button>
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
