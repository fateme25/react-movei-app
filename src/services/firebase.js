// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlPyFcKEwsgMrlCzrUpE9cLnuuQs-oC5o",
  authDomain: "react-movie-d0d17.firebaseapp.com",
  projectId: "react-movie-d0d17",
  storageBucket: "react-movie-d0d17.firebasestorage.app",
  messagingSenderId: "621292558665",
  appId: "1:621292558665:web:9503bb1e3ac40a01c4a298",
  measurementId: "G-YY4QZ1R0N0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
