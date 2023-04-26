import axios from "axios";
import React, { useEffect, useState } from "react";
import starwars from "../../image/starwars.png";
import "./Exercise2.scss";

const Exercise2 = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);
  const [me, setMe] = useState({});

  const [count2, setCount2] = useState(0);
  const [machine, setMachine] = useState({});
  useEffect(() => {
    try {
      (async function () {
        let api = "https://swapi.dev/api/starships";
        let getData = [];
        do {
          let dataURL = await axios.get(api);
          api = dataURL.data.next;

          const results = await dataURL.data.results;
          getData = [...getData, ...results];
          setData(getData);
          setLoading(false);
        } while (api);
        let index1 = Math.floor(Math.random() * (getData.length - 1));
        setMe(getData[index1]);
        getData.splice(index1, 1);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [total === 11]);

  const onchangeMe = (a, b, me) => {
    if (a > b) {
      setCount(count + 1);
      document.getElementById("list1").style.background = "Green";
      document.getElementById("list2").style.background = "Red";
      setShow(true);
    } else if (a < b) {
      document.getElementById("list2").style.background = "Green";
      document.getElementById("list1").style.background = "Red";
      setShow(false);
      setCount2(count2 + 1);
    } else if (
      me.max_atmosphering_speed === "unknown" ||
      me.max_atmosphering_speed === "n/a" ||
      machine.max_atmosphering_speed === "unknown" ||
      machine.max_atmosphering_speed === "n/a" ||
      a === b
    ) {
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      setCount(count);
      setCount2(count2);
    }
    console.log(
      "1:",
      me.max_atmosphering_speed,
      "2: ",
      machine.max_atmosphering_speed
    );
    console.log("a và b: ", a, b);
    console.log("total: ", total);
    if (total === 10 && count > count2) {
      setCount(0);
      setCount2(0);
      alert("You win!");
      document.getElementById("list1").style.background = "White";
      document.getElementById("list2").style.background = "White";
      return;
    } else if (total === 10 && count < count2) {
      setCount(0);
      setCount2(0);
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      alert("You lose!");
      return;
    } else if (total === 10 && count === count2) {
      setCount(0);
      setCount2(0);
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      alert("Draw!");
      return;
    }
  };
  const onchangeMachine = (a, b, machine) => {
    if (a > b) {
      setCount(count + 1);
      document.getElementById("list1").style.background = "Green";
      document.getElementById("list2").style.background = "Red";
      setShow(true);
    } else if (b > a) {
      setCount2(count2 + 1);
      document.getElementById("list2").style.background = "Green";
      document.getElementById("list1").style.background = "Red";
      setShow(false);
    } else if (
      me.max_atmosphering_speed === "unknown" ||
      me.max_atmosphering_speed === "n/a" ||
      machine.max_atmosphering_speed === "unknown" ||
      machine.max_atmosphering_speed === "n/a" ||
      a === b
    ) {
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      setCount(count);
      setCount2(count2);
    }
    console.log(
      "1:",
      me.max_atmosphering_speed,
      "2: ",
      machine.max_atmosphering_speed
    );
    console.log("a và b: ", a, b);
    console.log("total: ", total);
    if (total === 10 && count > count2) {
      setCount(0);
      setCount2(0);

      document.getElementById("list1").style.background = "White";
      document.getElementById("list2").style.background = "White";
      alert("You win!");
      return;
    } else if (total === 10 && count < count2) {
      setCount(0);
      setCount2(0);

      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      alert("You lose!");
      return;
    } else if (total === 10 && count === count2) {
      setCount(0);
      setCount2(0);

      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      alert("Draw!");
      return;
    }
  };
  const handleMe = (index1) => {
    setMe(data[index1]);
    data.splice(index1, 1);
    setTotal(total + 1);
    if (total === 10) {
      setTotal(0);
    }
    console.log("Me: ", index1, data[index1]);
    // setShowMachine(true);
    // setShowMe(false);
  };
  const handleMachine = (index1) => {
    setMachine(data[index1]);
    data.splice(index1, 1);
    setTotal(total + 1);
    if (total === 10) {
      setTotal(0);
    }
    console.log("Machine: ", index1, data[index1]);
  };
  const handleClickMeSpeed = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let me = data[index1];
    let a = parseInt(me.max_atmosphering_speed);
    let b = parseInt(machine.max_atmosphering_speed);
    onchangeMe(a, b, me);
    handleMe(index1);
  };
  const handleClickCredit = async () => {
    const index1 = Math.floor(Math.random() * data.length);
    let me = data[index1];
    let a = parseInt(me.cost_in_credits);
    let b = parseInt(machine.cost_in_credits);
    onchangeMe(a, b, me);
    handleMe(index1);
  };
  const handleClickPassenger = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let me = data[index1];
    let a = parseInt(me.passengers);
    let b = parseInt(machine.passengers);
    onchangeMe(a, b, me);
    handleMe(index1);
  };
  const handleClickFilm = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let me = data[index1];
    let a = parseInt(me.films?.length);
    let b = parseInt(machine.films?.length);
    onchangeMe(a, b, me);
    handleMe(index1);
  };

  const handleClickMeSpeed2 = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let machine = data[index1];
    let a = parseInt(me.max_atmosphering_speed);
    let b = parseInt(machine.max_atmosphering_speed);
    onchangeMachine(a, b, machine);
    handleMachine(index1);
  };
  const handleClickCredit2 = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let machine = data[index1];
    let a = parseInt(me.cost_in_credits);
    let b = parseInt(machine.cost_in_credits);
    onchangeMachine(a, b, machine);
    handleMachine(index1);
  };
  const handleClickPassenger2 = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let machine = data[index1];
    let a = parseInt(me.passengers);
    let b = parseInt(machine.passengers);
    onchangeMachine(a, b, machine);
    handleMachine(index1);
  };
  const handleClickFilm2 = async () => {
    const index1 = Math.floor(Math.random() * data.length);

    let machine = data[index1];
    let a = parseInt(me.films?.length);
    let b = parseInt(machine.films?.length);
    onchangeMachine(a, b, machine);
    handleMachine(index1);
  };
  console.log("set Show : >>>> ", show);
  const handleClickReset = () => {
    window.location.reload(false);
  };
  return (
    <div className="container2">
      <div className="header-scores">
        <span>{count}</span>
        <span>total :{total}</span>
        <span>{count2}</span>
      </div>
      {loading === false ? (
        <div className="body">
          <div className="body-item">
            <div className="body-title">SnowsPeeders</div>
            <div className="body-image">
              <img src={starwars} alt="" />
            </div>
            <div className="body-list" id="list1">
              <div className="item" onClick={() => handleClickMeSpeed()}>
                <span>Max Speed</span>
                <span>{show ? me.max_atmosphering_speed : "?"}</span>
              </div>
              <div className="item" onClick={() => handleClickCredit()}>
                {" "}
                <span>Credit</span>
                <span>{show ? me.cost_in_credits : "?"}</span>
              </div>
              <div className="item" onClick={() => handleClickPassenger()}>
                {" "}
                <span>Passengers</span>
                <span>{show ? me.passengers : "?"}</span>
              </div>
              <div className="item" onClick={() => handleClickFilm()}>
                {" "}
                <span>Film Appearances</span>
                <span>{show ? me.films?.length : "?"}</span>
              </div>
            </div>
          </div>
          <button className="reset" onClick={() => handleClickReset()}>
            Reset
          </button>
          <div className="body-item">
            <div className="body-title">Storm Twin cloud car</div>
            <div className="body-image">
              <img src={starwars} alt="" />
            </div>
            <div className="body-list" id="list2">
              <div className="item" onClick={() => handleClickMeSpeed2()}>
                <span>Max Speed</span>
                <span>{show ? "?" : machine.max_atmosphering_speed}</span>
              </div>
              <div className="item" onClick={() => handleClickCredit2()}>
                {" "}
                <span>Credit</span>
                <span>{show ? "?" : machine.cost_in_credits}</span>
              </div>
              <div className="item" onClick={() => handleClickPassenger2()}>
                {" "}
                <span>Passengers</span>
                <span>{show ? "?" : machine.passengers}</span>
              </div>
              <div className="item" onClick={() => handleClickFilm2()}>
                {" "}
                <span>Film Appearances</span>
                <span>{show ? "?" : machine.films?.length}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading ..................</h2>
      )}
    </div>
  );
};

export default Exercise2;

// useEffect(() => {
//   // const index1 = Math.floor(Math.random() * data.length);
//   // setMe(data[index1]);
//   // console.log("Me: ", index1, data[index1]);
//   // data.splice(index1, 1);
//   let a = parseInt(me.max_atmosphering_speed);
//   let b = parseInt(machine.max_atmosphering_speed);
//   if (a > b) {
//     setCount(count + 1);
//     document.getElementById("list1").style.background = "Green";
//     document.getElementById("list2").style.background = "Red";
//   } else if (a < b) {
//     document.getElementById("list2").style.background = "Green";
//     document.getElementById("list1").style.background = "Red";
//     setCount2(count2 + 1);
//   } else if (
//     me.max_atmosphering_speed === "unknown" ||
//     me.max_atmosphering_speed === "n/a" ||
//     machine.max_atmosphering_speed === "unknown" ||
//     machine.max_atmosphering_speed === "n/a"
//   ) {
//     document.getElementById("list2").style.background = "White";
//     document.getElementById("list1").style.background = "White";
//     setCount(count);
//     setCount2(count2);
//   }
//   console.log(
//     "1:",
//     me.max_atmosphering_speed,
//     "2: ",
//     machine.max_atmosphering_speed
//   );
//   console.log("a và b: ", a, b);
//   console.log("total: ", total);
//   if (total === 10 && count > count2) {
//     setCount(0);
//     setCount2(0);
//     setTotal(0);
//     document.getElementById("list1").style.background = "White";
//     document.getElementById("list2").style.background = "White";
//     return alert("You win!");
//   } else if (total === 10 && count < count2) {
//     setCount(0);
//     setCount2(0);
//     setTotal(0);
//     document.getElementById("list2").style.background = "White";
//     document.getElementById("list1").style.background = "White";
//     return alert("You lose!");
//   } else if (total === 10 && count === count2) {
//     setCount(0);
//     setCount2(0);
//     setTotal(0);
//     document.getElementById("list2").style.background = "White";
//     document.getElementById("list1").style.background = "White";
//     return alert("Draw!");
//   }
// }, [me, machine]);
