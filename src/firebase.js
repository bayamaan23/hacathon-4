// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLmPbl2TlPHKorKF99gTY5v7R0aVzmDXY",
  authDomain: "project-with-mentor-651b7.firebaseapp.com",
  projectId: "project-with-mentor-651b7",
  storageBucket: "project-with-mentor-651b7.appspot.com",
  messagingSenderId: "509212006156",
  appId: "1:509212006156:web:2c38aa576b8ec4f04e1b29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
