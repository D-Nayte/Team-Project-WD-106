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
