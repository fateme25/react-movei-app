import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../services/firebase";

export const signUpUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const sinInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const SinInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithRedirect(auth, provider);
};

export const getAuthResult = async () => {
  return getRedirectResult(auth); // This will be called after the redirect
};

export const signOutUser = () => {
  return auth.signOut();
};

export const PasswordReset = async (email) => {
  return sendPasswordResetEmail(auth, email);
};

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };