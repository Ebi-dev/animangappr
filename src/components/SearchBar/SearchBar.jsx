import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { searchAnime } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await dispatch(searchAnime(title));
      navigate("/searchResults");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.bar}
          type="text"
          placeholder="Busca un anime..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};
