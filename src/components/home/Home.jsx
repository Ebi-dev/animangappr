import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Navi } from "../Navi/Navi";
import { SearchBar } from "../SearchBar/SearchBar";
import { ShowSeason } from "../SeasonDisplay/ShowSeason";
import { Details } from "../Details/Details";

export const Home = () => {
  const State = useSelector((state) => state);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navi />
      <SearchBar />
      <span style={{ marginLeft: 25, color: "white", fontSize: 14 }}>
        Watch this season...
      </span>
      <ShowSeason seasonType={"now"} openModal={setOpenModal} />
      <span style={{ marginLeft: 25, color: "white", fontSize: 14 }}>
        Get hyped up for...
      </span>
      <ShowSeason seasonType={"upcoming"} openModal={setOpenModal} />
      {openModal && (
        <Details closeModal={setOpenModal} info={State.selectedAnimanga.info} />
      )}
    </div>
  );
};
