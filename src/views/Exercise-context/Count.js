import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Count = () => {
  const { total } = useContext(ThemeContext);
  const { count } = useContext(ThemeContext);
  const { count2 } = useContext(ThemeContext);
  return (
    <div>
      <div className="header-scores">
        <span>{count}</span>
        <span>{total}</span>
        <span>{count2}</span>
      </div>
    </div>
  );
};

export default Count;
