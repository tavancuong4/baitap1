import axios from "axios";
import * as Types from "./acctionTypes";
import { callAPIStarWar } from "../services/callAPI";

export const callAPI = () => async (dispatch) => {
  const data = await callAPIStarWar();
  console.log("36 starwarrrrrr action");
  console.log(data);
  dispatch({
    type: Types.FETCH_POSTS_SUCCESS,
    data: data,
    random: data[0],
  });
};

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: Types.FETCH_POSTS_REQUEST });
    let page = 1;
    let arr = [];
    (async function () {
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
          if (data.next) {
            page += 1;
            let res = await axios.get(
              `https://swapi.dev/api/starships/?page=${page}`
            );
            arr = arr.concat(res.data.results);
            let index11 = Math.floor(Math.random() * arr.length);
            dispatch({
              type: Types.FETCH_POSTS_SUCCESS,
              data: arr,
              random: arr[index11],
            });
          } else {
            console.log("Hết data");
            return arr;
          }
        }
      }
    })();
    handleRandomMe();
  } catch (error) {
    console.log(error);
    dispatch({
      type: Types.FETCH_POSTS_ERROR,
      message: error,
    });
  }
};
export const handleRandomMachine = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.RANDOM_MACHINE,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: Types.FETCH_POSTS_ERROR,
      message: error,
    });
  }
};
export const handleRandomMe = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.RANDOM_ME,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: Types.FETCH_POSTS_ERROR,
      message: error,
    });
  }
};

export const loadData = () => async (dispatch) => {
  try {
    dispatch({ type: Types.FETCH_POSTS_REQUEST });
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const responseBody = await response.json();

    dispatch({
      type: Types.FETCH_POSTS_SUCCESS,
      data: responseBody,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: Types.FETCH_POSTS_ERROR,
      message: error,
    });
  }
};

export const actAddTotal = () => {
  return {
    type: Types.ADD_TOTAL,
  };
};
export const actDeleteTotal = () => {
  return {
    type: Types.RESET_TOTAL,
  };
};

export const actFetchData = (data) => {
  return {
    type: "data/fetchData",
    data,
  };
};
export const actDeleteData = (id) => {
  return {
    type: "data/deleteData",
    id,
  };
};
export const actDeleteCount = (id) => {
  return {
    type: "countDelete",
    id,
  };
};
export const actAddCount = (id) => {
  return {
    type: "countAdd",
    id,
  };
};
export const actDeleteCount2 = (id) => {
  return {
    type: "countDelete2",
    id,
  };
};
export const actAddCount2 = (id) => {
  return {
    type: "countAdd2",
    id,
  };
};
// export const actFetchData = (data) => {
//   return {
//     type: Types.FETCH_DATA,
//     data,
//   };
// };
// export const actDeleteData = (id) => {
//   return {
//     type: Types.DELETE_DATA,
//     id,
//   };
// };
