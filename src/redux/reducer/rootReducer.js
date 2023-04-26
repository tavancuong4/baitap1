// import * as Types from "../acctionTypes";

import { combineReducers } from "redux";
import DataReducer from "./dataReducer";
import TotalReducer from "./totalReducer";
import CountReducer from "./countReducer";
import CountReducer2 from "./count2Reducer";

// const initState = [];

const rootReducer = combineReducers({
  datas: DataReducer,
  total: TotalReducer,
  count: CountReducer,
  count2: CountReducer2,
});
export default rootReducer;

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case Types.FETCH_DATA:
//       state = action.data;
//       return [...state];
//     case Types.DELETE_DATA:
//       var index = action.id;
//       state.splice(index, 1);
//       return [...state];

//     default:
//       return state;
//   }
// };
// export default rootReducer;
