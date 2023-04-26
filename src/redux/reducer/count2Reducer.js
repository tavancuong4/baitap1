const initState = { count: 0 };

const CountReducer2 = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "countAdd2":
      let countAdd = state.count + 1;
      return { ...state, count: countAdd };

    case "countDelete2":
      return { ...state, count: 0 };

    default:
      return state;
  }
};
export default CountReducer2;
