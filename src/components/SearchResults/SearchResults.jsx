import React from "react";
import { useSelector } from "react-redux";
import { Navi } from "../Navi/Navi";
import { SearchBar } from "../SearchBar/SearchBar";
import { ResultCards } from "./ResultCards";
import { Details } from "../Details/Details";
import styles from "./SearchResults.module.css";

export const SearchResults = () => {
  const State = useSelector((state) => state);
  const results = State.searchResults.info;
  return (
    <div>
      <Navi />
      <SearchBar />
      <div className={styles.resultsContainer}>
        <ul>
          {results &&
            results.map((anime) => {
              return (
                <li key={anime.id}>
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
    </div>
  );
};
