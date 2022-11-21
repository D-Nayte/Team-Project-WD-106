import { auth } from "./fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { storage } from "../auth/fireBase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import noAvatarPicture from "../assets/images/avatars/noAvatar.png";

//Create new USer
export async function createUser(email, password, picture) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await _uploadAvatar(user, picture);
    return user;
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
    return;
  }
}

//Log in excisting user
export async function logInUser(email = "tes12t@test.de", password = "123456") {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
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
    return error;
  }
}

export async function logOut() {
  signOut(auth);
}

async function _uploadAvatar(user, picture) {
  const id = user.user.uid;
  const avatarRef = ref(storage, `user-data/${id}/avatar`);
  if (!picture) picture = noAvatarPicture;
  try {
    const snapshot = await uploadBytes(avatarRef, picture);
    console.log("Snapshot uploadiong avatar", snapshot);
    return true;
  } catch (error) {
    console.log("error laoding Avatar:", error);
    return false;
  }
}
