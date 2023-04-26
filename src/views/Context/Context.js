import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
const Context = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [me, setMe] = useState({});
  const [count, setCount] = useState(0);

  const [machine, setMachine] = useState({});
  const [count2, setCount2] = useState(0);
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
        if (data.next) {
          page += 1;
          let res = await axios.get(
            `https://swapi.dev/api/starships/?page=${page}`
          );
          arr = arr.concat(res.data.results);
          if (data.next) {
            page += 1;
            let res = await axios.get(
              `https://swapi.dev/api/starships/?page=${page}`
            );
            arr = arr.concat(res.data.results);
            if (res.data.next) {
              page += 1;
              let res = await axios.get(
                `https://swapi.dev/api/starships/?page=${page}`
              );
              arr = arr.concat(res.data.results);
              console.log("array 4:", page, arr);
              setData(arr);
            } else {
              console.log("đã hết api");
              return arr;
            }
          }
        }
        setData(arr);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [total === 10]);
  const handleClickMe = () => {
    const index1 = Math.floor(Math.random() * (data.length - 1));
    setMe(data[index1]);
    data.splice(index1, 1);
    setTotal(total + 1);
  };
  const handleClickMachine = () => {
    const index2 = Math.floor(Math.random() * (data.length - 1));
    setMachine(data[index2]);
    data.splice(index2, 1);
    setTotal(total + 1);
    setShow(true);
  };
  useEffect(() => {
    let a = parseInt(me.max_atmosphering_speed);
    let b = parseInt(machine.max_atmosphering_speed);
    if (a > b) {
      setCount(count + 1);
      document.getElementById("list1").style.background = "Green";
      document.getElementById("list2").style.background = "Red";
    } else if (a < b) {
      document.getElementById("list2").style.background = "Green";
      document.getElementById("list1").style.background = "Red";
      setCount2(count2 + 1);
    } else if (
      me.max_atmosphering_speed === "unknown" ||
      me.max_atmosphering_speed === "n/a" ||
      machine.max_atmosphering_speed === "unknown" ||
      machine.max_atmosphering_speed === "n/a"
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
    console.log("total: ", total);
    if (total === 10 && count > count2) {
      setCount(0);
      setCount2(0);
      setTotal(0);
      document.getElementById("list1").style.background = "White";
      document.getElementById("list2").style.background = "White";
      return alert("You win! ");
    } else if (total === 10 && count < count2) {
      setCount(0);
      setCount2(0);
      setTotal(0);
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      return alert("You lose!");
    } else if (total === 10 && count === count2) {
      setCount(0);
      setCount2(0);
      setTotal(0);
      document.getElementById("list2").style.background = "White";
      document.getElementById("list1").style.background = "White";
      return alert("Draw! ");
    }
  }, [me, machine]);
  const handleClickShow = () => {
    setShow(!show);
  };
  return (
    <ThemeContext.Provider
      value={{
        data,
        total,
        loading,
        setTotal,
        handleClickMe,
        handleClickMachine,
        handleClickShow,
        me,
        machine,
        show,
        count,
        count2,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { Context, ThemeContext };
