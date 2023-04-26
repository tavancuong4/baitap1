import React, { useContext } from "react";
import CardMachine from "./CardMachine";
import CardMe from "./CardMe";
import Count from "./Count";
import { ThemeContext } from "../Context/Context";

const ExerciseContext = () => {
  const { loading } = useContext(ThemeContext);
  console.log("loading22: ", loading);

  return (
    <div className="container2">
      <Count />
      {loading === false ? (
        <div className="body">
          <CardMe />
          
          <CardMachine />
        </div>
      ) : (
        <h2>Loading.............</h2>
      )}
    </div>
  );
};

export default ExerciseContext;
