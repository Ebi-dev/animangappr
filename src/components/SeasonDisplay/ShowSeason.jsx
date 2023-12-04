import React from "react";
import { CardContainer } from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSeason } from "../../redux/actions/actions";

export const ShowSeason = ({ seasonType, openModal }) => {
  const dispatch = useDispatch();
  const State = useSelector((state) => state);

  console.log(State);

  useEffect(() => {
    dispatch(getSeason(seasonType));
  }, []);

  if (seasonType === "now") {
    return (
      <div>
        <CardContainer info={State.currentSeason.info} openModal={openModal}/>
      </div>
    );
  } else {
    return (
      <div>
        <CardContainer info={State.nextSeason.info} openModal={openModal} />
      </div>
    );
  }
};
