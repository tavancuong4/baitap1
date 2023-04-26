import React from "react";
import { useContext } from "react";
import starwars from "../../image/starwars.png";
import { ThemeContext } from "../Context/Context";

const CardMachine = () => {
  const { machine } = useContext(ThemeContext);
  const { handleClickMachine } = useContext(ThemeContext);
  const { show } = useContext(ThemeContext);
  const { handleClickShow } = useContext(ThemeContext);

  return (
    <div className="body-item">
      <div className="body-title" onClick={handleClickMachine}>
        {" "}
        Storm Twin cloud car
      </div>
      <div className="body-image">
        <img src={starwars} alt="" />
      </div>
      <div className="body-list" id="list2">
        <div className="item" onClick={handleClickShow}>
          <span>Max Speed</span>
          <span>{show ? machine.max_atmosphering_speed : "?"}</span>
        </div>
        <div className="item">
          {" "}
          <span>Credit</span>
          <span>{show ? machine.cost_in_credits : "?"}</span>
        </div>
        <div className="item">
          {" "}
          <span>Passengers</span>
          <span>{show ? machine.passengers : "?"}</span>
        </div>
        <div className="item">
          {" "}
          <span>Film Appearances</span>
          <span>{show ? machine.films?.length : "?"}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMachine;
