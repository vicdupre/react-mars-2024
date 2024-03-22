// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXdI2BDC6h2ORdxrdeOmYZSpTn81QJQTE",
  authDomain: "react-mars-2024.firebaseapp.com",
  projectId: "react-mars-2024",
  storageBucket: "react-mars-2024.appspot.com",
  messagingSenderId: "916416476756",
  appId: "1:916416476756:web:cc806367e3cb0dd2965fc1",
  measurementId: "G-BES4X1YMFD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, analytics, auth, db };
