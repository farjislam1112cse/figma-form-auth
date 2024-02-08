// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD12X5x7DSqjT4Ef1cFsir-4kH_ghzf038",
  authDomain: "figma-form-auth.firebaseapp.com",
  projectId: "figma-form-auth",
  storageBucket: "figma-form-auth.appspot.com",
  messagingSenderId: "599010159303",
  appId: "1:599010159303:web:b4a70899cf204fd7542ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
