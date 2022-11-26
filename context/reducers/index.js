import { combineReducers } from "redux";

//reducers
function companyData(comp = { lawyers: [], unions: [] }, action) {
  switch (action.type) {
    case "CHANGE_LAWYERS":
      return { lawyers: action.payload, unions: comp.unions };
    case "CHANGE_UNIONS":
      return { unions: action.payload, lawyers: comp.lawyers };

    default:
      return comp;
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

function messages(state = null, action) {
  switch (action.type) {
    case "SET_MESSAGES":
      return (state = action.payload);

    default:
      return state;
  }
}

function showData(state = null, action) {
  switch (action.type) {
    case "SET_SHOWSTATE":
      return (state = action.payload);
    case "DELETE_STATE":
      return (state = null);

    default:
      return state;
  }
}

export default function allReducers() {
  return combineReducers({ companyData, isLoggedIn, messages, showData });
}

//Redux examples
// const counter = useSelector((state) => state.counter) gives you the prop to display it
// const dispatch = useDispatch() changes the state in redux

// <button className="btn" onClick={() => dispatch(increment())}>
