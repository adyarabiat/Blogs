export default (state = [], action) => {
  switch (action.type) {
    case "FETCH-USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
