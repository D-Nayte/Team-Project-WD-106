import { combineReducers } from "redux";

//reducer
function counter(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return (count += 1);

    case "DECREMENT":
      return (count -= 1);

    default:
      return count;
  }
}

function isLoggedIn(state = false, action) {
  if (action === true) state = action;
  return state;
}

export default function allReducers() {
  return combineReducers({ counter, isLoggedIn });
}
