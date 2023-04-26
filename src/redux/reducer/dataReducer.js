import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  RANDOM_ME,
  RANDOM_MACHINE,
} from "../acctionTypes";

const initState = {
  requesting: false,
  success: false,
  message: null,
  data: [],
  randomMe: {},
  randomMachine: {},
};

const DataReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, requesting: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
        randomMe: action.random,
        randomMachine: {},
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: action.message,
      };
    case RANDOM_ME:
      let index1 = Math.floor(Math.random() * (state.data.length - 1));
      console.log("index *********:", index1);
      let dataNew = state.data.splice(index1, 1);
      console.log("dataNew: *****:", dataNew);

      return {
        ...state,
        requesting: false,
        success: true,
        randomMe: state.data[index1],
      };
    case RANDOM_MACHINE:
      let index2 = Math.floor(Math.random() * (state.data.length - 1));
      console.log("index *********:", index2);
      state.data.splice(index2, 1);
      return {
        ...state,
        requesting: false,
        success: true,
        randomMachine: state.data[index2],
      };

    default:
      return state;
  }
};
export default DataReducer;
