import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Component.scss";

const Component = () => {
  const [data, setData] = useState([]);
  const [dataShow, setDataShow] = useState({});
  const [listData, setListData] = useState([]);
  const [total, setTotal] = useState(6);
  const [count, setCount] = useState(1);
  let select = React.createRef();
  useEffect(() => {
    try {
      (async function () {
        let res = await axios.get(
          "https://run.mocky.io/v3/d03e0886-f5c8-4961-902d-51bfe8059a33"
        );
        let data = res.data ? res.data : [];
        setData(data);
        setDataShow(data[0]);
        setListData(data.slice(0, total));

        console.log("data:", data);
        // console.log("data Show: ", dataShow);
        console.log("list data: ", listData);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClick = (item) => {
    setDataShow(item);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    let newCount;
    newCount = count - 1;
    if (newCount === 0) newCount = Math.ceil(data.length / total);
    console.log("count: ", count);
    let end = total * newCount;
    setListData(data.slice(end - total, end));
    console.log("newCount: ", newCount);
    setCount(newCount);
  };
  const handleNext = (e) => {
    e.preventDefault();
    let newCount;

    newCount = count + 1;
    if (data.length / total <= count) newCount = 1;
    console.log("count: ", count);
    let end = total * newCount;
    setListData(data.slice(end - total, end));
    console.log("newCount: ", newCount);
    setCount(newCount);
  };
  const changeGenre = () => {
    console.log("value: ", select.current.value);
    let arr = [];
    for (let item in data) {
      // console.log("item: ", data[item].Genre);
      let data2 = data[item].Genre;
      // for (let i in data2) {
      //   console.log("i", data2[i]);
      if (data2.includes(select.current.value) === true) {
        arr.push(data[item]);
        // console.log("array: ", data[item]);
      }
    }
    setListData(arr);
    if (select.current.value === "All") {
      setListData(data);
    }
  };
  return (
    <div className="container">
      <div className="body">
        <div className="body-left">
          <img src={dataShow.Poster} alt="" />
        </div>
        <div className="body-right">
          <div className="title">{dataShow.Title}</div>
          <div className="information">
            <ol>
              <li className="actors">
                <strong>Actors: </strong> {dataShow.Actors}
              </li>
              <li>
                <strong>Genre: </strong> {dataShow.Genre}
              </li>
              <li>
                <strong>Plot: </strong> {dataShow.Plot}
              </li>
              <li>
                <strong>Title: </strong> {dataShow.Title}
              </li>
              <li>
                <strong>Year: </strong> {dataShow.Year}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="footer"> 
        <div className="footer-select">
          <select ref={select} onChange={changeGenre}>
            <option value="All">Genre All</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
          </select>
        </div>
        <div className="prev" onClick={(e) => handlePrev(e)}>
          Prev
        </div>
        <div className="footer-list">
          {listData.map((item, index) => {
            return (
              <div className="list" key={index}>
                <div className="item">
                  <img
                    src={item.Poster}
                    alt=""
                    width={{ width: "100%" }}
                    onClick={() => handleClick(item)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="next" onClick={(e) => handleNext(e)}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Component;
