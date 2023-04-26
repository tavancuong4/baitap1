import { ADD_TOTAL, RESET_TOTAL } from "../acctionTypes";

const initState = {
  total: 0,
};

const TotalReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case ADD_TOTAL:
      let totalPlus = state.total + 1;
      return {
        ...state,
        total: totalPlus,
      };
    case RESET_TOTAL:
      return {
        ...state,
        total: 0,
      };
    default:
      return state;
  }
};
export default TotalReducer;
