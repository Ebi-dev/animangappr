import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navi } from "../Navi/Navi";
import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ResultCards } from "./ResultCards";
import { Details } from "../Details/Details";
import styles from "./SearchResults.module.css";
import { getById } from "../../redux/actions/actions";

export const SearchResults = () => {
  const State = useSelector((state) => state);
  const [openModal, setOpenModal] = useState(false);
  const results = State.searchResults.info;
  const dispatch = useDispatch();

  let selectAnimanga = async (anime) => {
    await dispatch(getById(anime.id));
    setOpenModal(true)
  };

  return (
    <div>
      <Navi />
      <SearchBar />
      <div className={styles.resultsContainer}>
        <ul>
          {results &&
            results.map((anime) => {
              return (
                <li key={anime.id} onClick={() => {selectAnimanga(anime)}}>
                  <ResultCards
                    title={anime.title}
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
      </div>
      {openModal && (
        <Details closeModal={setOpenModal} info={State.selectedAnimanga.info} />
      )}
    </div>
  );
};
