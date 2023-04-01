import axios from "axios";
import React, { useEffect, useState } from "react";
import starwars from "../../image/starwars.png";
import "./Exercise2.scss";

const Exercise2 = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);

  const [count, setCount] = useState(0);
  const [me, setMe] = useState({});
  const [speed, setSpeed] = useState(0);
  const [cost, setCost] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [film, setFilm] = useState(0);

  const [count2, setCount2] = useState(0);
  const [machine, setMachine] = useState({});
  const [speed2, setSpeed2] = useState(0);
  const [cost2, setCost2] = useState("");
  const [passengers2, setPassengers2] = useState(0);
  const [film2, setFilm2] = useState(0);
  const [dataCard, setDataCard] = useState({});

  useEffect(() => {
    try {
      (async function () {
        let arr = [];
        let page = 1;
        let res = await axios.get(
          `https://swapi.dev/api/starships/?page=${page}`
        );
        let data = res && res.data ? res.data : [];
        arr = arr.concat(data.results);
        // console.log("array 1:", arr);
        if (data.next) {
          page += 1;
          let res = await axios.get(
            `https://swapi.dev/api/starships/?page=${page}`
          );
          arr = arr.concat(res.data.results);
          // console.log("array 2:", page, arr);
          if (res.data.next) {
            page += 1;
            let res = await axios.get(
              `https://swapi.dev/api/starships/?page=${page}`
            );
            arr = arr.concat(res.data.results);
            // console.log("array 3:", page, arr);
            setData(arr);
            if (res.data.next) {
              page += 1;
              let res = await axios.get(
                `https://swapi.dev/api/starships/?page=${page}`
              );
              arr = arr.concat(res.data.results);
              console.log("array 4:", page, arr);
              const index1 = Math.floor(Math.random() * data.length);
              setMe(data[index1]);
              setData(arr);
              if (res.data.next) {
                page += 1;
                let res = await axios.get(
                  `https://swapi.dev/api/starships/?page=${page}`
                );
                arr = arr.concat(res.data.results);
                console.log("array 4:", page, arr);
                setData(arr);
              } else {
                console.log("đã hết dữ liệu");
                return arr;
              }
            } else {
              console.log("đã hết dữ liệu");
              return arr;
            }
          }
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClickMe = () => {
    const index1 = Math.floor(Math.random() * data.length);
    setMe(data[index1]);
    console.log("Me: ", index1, data[index1]);
    data.splice(index1, 1);
    setTotal(total + 1);
  };
  const handleClickMachine = () => {
    const index2 = Math.floor(Math.random() * data.length);
    setMachine(data[index2]);
    console.log("Machine: ", index2, data[index2]);
    data.splice(index2, 1);
    setTotal(total + 1);
  };
  useEffect(() => {
    // const index1 = Math.floor(Math.random() * data.length);
    // setMe(data[index1]);
    // console.log("Me: ", index1, data[index1]);
    // data.splice(index1, 1);
    let a = parseInt(me.max_atmosphering_speed);
    let b = parseInt(machine.max_atmosphering_speed);
    if (a > b) {
      setCount(count + 1);
    } else if (a < b) {
      setCount2(count2 + 1);
    } else {
      setCost(count);
      setCost2(count2);
    }
    console.log(
      "1:",
      me.max_atmosphering_speed,
      "2: ",
      machine.max_atmosphering_speed
    );
    console.log("total: ", total);
    if (total === 10 && count > cost2) {
      setCount(0);
      return alert("Bạn đã thắng máy ");
    } else if (total === 10 && count < cost2) {
      setCount2(0);
      return alert("Bạn đã thua máy ");
    }
  }, [me, machine]);
  const handleClickShow = () => {
    setShow(!show);
  };
  return (
    <div className="container2">
      {/* <h1>Hello cac ban</h1> */}
      <div className="header-scores">
        <span>{count}</span>
        <span>{count2}</span>
      </div>
      <div className="body">
        <div className="body-item">
          <div className="body-title" onClick={() => handleClickMe()}>
            SnowsPeeders
          </div>
          <div className="body-image">
            <img src={starwars} alt="" />
          </div>
          <div className="body-list">
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
        <div className="body-item">
          <div className="body-title" onClick={() => handleClickMachine()}>
            Storm TV Twin-Pod cloud car
          </div>
          <div className="body-image">
            <img src={starwars} alt="" />
          </div>
          <div className="body-list">
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
      {/* <div className="footter">
        <button>Play Random</button>
      </div> */}
    </div>
  );
};

export default Exercise2;
