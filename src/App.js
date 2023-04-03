import logo from "./logo.svg";
import "./App.css";
import Component from "./views/Component/Component";
import Exercise2 from "./views/Exercise2/Exercise2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component />} />
          <Route path="/exercise" element={<Exercise2 />} />
        </Routes>
      </BrowserRouter>
      {/* <Component /> */}
      {/* <Exercise2 /> */}
    </div>
  );
}
export default App;
