//Danger: do not push config to public

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASqREfkoB7dorJN-LxHimz6vIu-ZC-IHo",
  authDomain: "email-password-auth-6a529.firebaseapp.com",
  projectId: "email-password-auth-6a529",
  storageBucket: "email-password-auth-6a529.firebasestorage.app",
  messagingSenderId: "263095798810",
  appId: "1:263095798810:web:dbc525b48b12ff22e155a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);