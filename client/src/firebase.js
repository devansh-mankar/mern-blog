// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3ebb5.firebaseapp.com",
  projectId: "mern-blog-3ebb5",
  storageBucket: "mern-blog-3ebb5.appspot.com",
  messagingSenderId: "158238943576",
  appId: "1:158238943576:web:6c965b7d8d70b9612f9d2d",
  measurementId: "G-EV5FD0X6PJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
