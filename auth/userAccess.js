import { auth, database } from "../auth/fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { storage } from "../auth/fireBase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import noAvatarPicture from "../assets/images/avatars/noAvatar.png";
import { doc, setDoc } from "firebase/firestore";

//Create new USer
export async function createUser(
  firstName,
  lastName,
  email,
  password,
  picture
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await _addToDatabase(user, firstName, lastName);
    if (picture) await _uploadAvatar(user, picture);
    console.log("FINISH");
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
    return { error: error, noUser: true };
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
    return { error: error, noUser: true };
  }
}

export async function logOut() {
  await signOut(auth);

  return true;
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

async function _addToDatabase(user, firstName, lastName) {
  const id = user.user.uid;
  const docRef = doc(database, `user-data`, id);

  try {
    const doc = await setDoc(docRef, {
      firstName: firstName,
      lastName: lastName,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
}
