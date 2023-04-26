import axios from "axios";
import React, { useEffect, useState } from "react";
import starwars from "../../image/starwars.png";
import { connect } from "react-redux";
import {
  actAddTotal,
  actDeleteTotal,
  actAddCount,
  actDeleteCount,
  actAddCount2,
  actDeleteCount2,
  fetchData,
  handleRandomMe,
  handleRandomMachine,
  callAPI,
} from "../../redux/acction";
import { useDispatch, useSelector } from "react-redux";

const ExerciseRedux = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.datas.data);
  const requesting = useSelector((state) => state.datas.requesting);
  const me = useSelector((state) => state.datas.randomMe);
  const machine = useSelector((state) => state.datas.randomMachine);

  const total = useSelector((state) => state.total.total);
  const count = useSelector((state) => state.count.count);
  const count2 = useSelector((state) => state.count2.count);
  console.log("cuong chi1: ", data);
  console.log("total chi1: ", total);
  console.log("count chi1: ", count);
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      dispatch(fetchData());
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleClickMe = () => {
    dispatch(handleRandomMe());
    dispatch(actAddTotal());
  };
  const handleClickMachine = () => {
    dispatch(handleRandomMachine());
    dispatch(actAddTotal());
    setShow(true);
  };
  const handleClickShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    let a = parseInt(me.max_atmosphering_speed);
    let b = parseInt(machine.max_atmosphering_speed);
    if (a > b) {
      dispatch(actAddCount());
      document.getElementById("list1").style.background = "Green";
      document.getElementById("list2").style.background = "Red";
    } else if (a < b) {
      document.getElementById("list2").style.background = "Green";
      document.getElementById("list1").style.background = "Red";
      dispatch(actAddCount2());
    } else if (
      me.max_atmosphering_speed === "unknown" ||
      me.max_atmosphering_speed === "n/a" ||
      machine.max_atmosphering_speed === "unknown" ||
      machine.max_atmosphering_speed === "n/a"
    ) {
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
    }
    console.log(
      "1:",
      me.max_atmosphering_speed,
      "2: ",
      machine.max_atmosphering_speed
    );

    console.log("total: ", total);
    if (total === 11 && count > count2) {
      dispatch(actDeleteCount());
      dispatch(actDeleteCount2());
      dispatch(actDeleteTotal());
      dispatch(fetchData());
      handleClickShow();
      document.getElementById("list1").style.background = "White";
      document.getElementById("list2").style.background = "White";
      return alert("You win!");
    } else if (total === 11 && count < count2) {
      dispatch(actDeleteCount());
      dispatch(actDeleteCount2());
      dispatch(actDeleteTotal());
      dispatch(fetchData());
      handleClickShow();
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      return alert("You lose!");
    } else if (total === 11 && count === count2) {
      dispatch(actDeleteCount());
      dispatch(actDeleteCount2());
      dispatch(actDeleteTotal());
      dispatch(fetchData());
      handleClickShow();
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      return alert("Draw!Draw!");
    }
  }, [me, machine]);
  const handleClickReset = () => {
    dispatch(fetchData());
  };
  return (
    <div className="container2">
      <div className="header-scores">
        <span>{count}</span>
        <span>{total}</span>
        <span>{count2}</span>
      </div>
      {requesting === false ? (
        <div className="body">
          <div className="body-item">
            <div className="body-title" onClick={() => handleClickMe()}>
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
          <button
            className="reset"
            style={{ marginTop: "250px", fontSize: "20px" }}
            onClick={() => handleClickReset()}
          >
            Reset
          </button>
          <div className="body-item">
            <div className="body-title" onClick={() => handleClickMachine()}>
              Storm Twin cloud car
            </div>
            <div className="body-image">
              <img src={starwars} alt="" />
            </div>
            <div className="body-list" id="list2">
              <div className="item" onClick={() => handleClickShow()}>
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
        </div>
      ) : (
        <h2>Loading ...................</h2>
      )}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     data: state,
//   };
// };
// const mapDispatchToProps = (dispatch, props) => {
//   return {50
//     fetchAllData: (data) => {
//       dispatch(actFetchData(data));
//     },
//     deleteDataRedux: (id) => dispatch(actDeleteData(id)),
//     addTotalRedux: () => dispatch(actAddTotal()),
//     deleteTotalRedux: () => dispatch(actDeleteTotal()),
//   };
// };

export default ExerciseRedux;
