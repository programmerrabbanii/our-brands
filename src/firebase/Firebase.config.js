// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSUSVX4HRpiBhpKDjwiiG0gmDmuhOQGW4",
  authDomain: "assingment-ten-256e0.firebaseapp.com",
  projectId: "assingment-ten-256e0",
  storageBucket: "assingment-ten-256e0.appspot.com",
  messagingSenderId: "812636451076",
  appId: "1:812636451076:web:57ea5b27724171ba0a2051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
