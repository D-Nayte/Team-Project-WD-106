//Actions
export function changeLawyers(payload) {
  return {
    type: "CHANGE_LAWYERS",
    payload: payload,
  };
}
export function changeUnions(payload) {
  return {
    type: "CHANGE_UNIONS",
    payload: payload,
  };
}

export function addMessages(payload) {
  return {
    type: "SET_MESSAGES",
    payload: payload,
  };
}
