export function signInUser(user = null) {
  return {
    type: "setUser",
    payload: user,
  };
}
export function signOutUser(user = null) {
  return {
    type: "signOut",
    payload: user,
  };
}

export function setShowData(string) {
  return {
    type: "SET_SHOWSTATE",
    payload: string,
  };
}

export function deleteShowData() {
  return {
    type: "DELETE_STATE",
  };
}
