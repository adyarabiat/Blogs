export default (state = [], action) => {
  switch (action.type) {
    case "FETCH-POSTS":
      return action.payload;
    default:
      return state;
  }
};
