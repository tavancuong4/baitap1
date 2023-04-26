import logo from "./logo.svg";
import "./App.css";
import Component from "./views/Component/Component";
import Exercise2 from "./views/Exercise2/Exercise2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseContext from "./views/Exercise-context/Exercise-react-context";
import ExerciseRedux from "./views/Exercise-redux/Exercise-redux";
import React from "react";
import { Context } from "./views/Context/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Component />} />
            <Route path="/exercise" element={<Exercise2 />} />
            <Route
              path="/exercise-react-context"
              element={<ExerciseContext />}
            />
            <Route path="/exercise-redux" element={<ExerciseRedux />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
