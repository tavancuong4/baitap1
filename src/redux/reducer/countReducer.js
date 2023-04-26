const initState = { count: 0 };

const CountReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "countAdd":
      let countAdd = state.count + 1;
      return { ...state, count: countAdd };

    case "countDelete":
      return { ...state, count: 0 };

    default:
      return state;
  }
};
export default CountReducer;
