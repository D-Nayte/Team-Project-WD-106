import { combineReducers } from "redux";

//reducers
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

function isLoggedIn(state = null, action) {
  switch (action.type) {
    case "setUser":
      return (state = action.payload);
    case "signOut":
      return null;
    default:
      return state;
  }
}

export default function allReducers() {
  return combineReducers({ counter, isLoggedIn });
}

//Redux examples
// const counter = useSelector((state) => state.counter) gives you the prop to display it
// const dispatch = useDispatch() changes the state in redux

// <button className="btn" onClick={() => dispatch(increment())}>
