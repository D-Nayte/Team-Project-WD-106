import { auth } from "./fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//Create new USer
export async function createUser(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code == "auth/email-already-in-use") {
      alert("The email address is already in use");
    } else if (error.code == "auth/invalid-email") {
      alert("The email address is not valid.");
    } else if (error.code == "auth/operation-not-allowed") {
      alert("Operation not allowed.");
    } else if (error.code == "auth/weak-password") {
      alert("The password is too weak.");
    }
  }
}

//Log in excisting user
export async function logInUser(email = "tes12t@test.de", password = "123456") {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code == "auth/email-already-in-use") {
      alert("The email address is already in use");
    } else if (error.code == "auth/invalid-email") {
      alert("The email address is not valid.");
    } else if (error.code == "auth/operation-not-allowed") {
      alert("Operation not allowed.");
    } else if (error.code == "auth/weak-password") {
      alert("The password is too weak.");
    }
  }
}

export async function logOut() {
  signOut(auth);
}
