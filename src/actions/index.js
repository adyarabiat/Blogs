import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH-POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH-USER", payload: response.data });
};

// We are not going to fetch the data here using axios becouse of two reasons:

// 1. here it should return a plain JS object and not a request using diffrent versions of ES

// 2.By the time our action get to the a reducer, we won't have feteched our data so even if we did't use the async await we will stil run into a problem with promise that we returned to the reducers

// Note: so to solve this issues we will use Redux Thunk as Middleware
