import React, { useContext, useEffect } from "react";
import starwars from "../../image/starwars.png";
import { ThemeContext } from "../Context/Context";

const CardMe = () => {
  const { handleClickMe } = useContext(ThemeContext);
  const { me } = useContext(ThemeContext);
  useEffect(() => {
    handleClickMe();
  }, []);

  return (
    <div className="body-item">
      <div className="body-title" onClick={handleClickMe}>
        SnowsPeeders
      </div>
      <div className="body-image">
        <img src={starwars} alt="" />
      </div>
      <div className="body-list" id="list1">
        <div className="item">
          <span>Max Speed</span>
          <span>{me.max_atmosphering_speed}</span>
        </div>
        <div className="item">
          {" "}
          <span>Credit</span>
          <span>{me.cost_in_credits}</span>
        </div>
        <div className="item">
          {" "}
          <span>Passengers</span>
          <span>{me.passengers}</span>
        </div>
        <div className="item">
          {" "}
          <span>Film Appearances</span>
          <span>{me.films?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMe;
