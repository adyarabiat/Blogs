import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  // We use a dummy data to remove the error message
  post: postReducer,
  users: usersReducer,
});
