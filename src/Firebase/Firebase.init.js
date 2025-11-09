// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf70m3MBNYkZTuhoOgFI0a8pg4Iwo-huk",
  authDomain: "app-store-79dbb.firebaseapp.com",
  projectId: "app-store-79dbb",
  storageBucket: "app-store-79dbb.firebasestorage.app",
  messagingSenderId: "348859976297",
  appId: "1:348859976297:web:b08a76a0b74c03032330f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
