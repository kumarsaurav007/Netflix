// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5U7HJKlJWmx4cRBXuEI_1e1oQuYAg-8k?",
  authDomain: "netflix-clone-27f96?.firebaseapp.com",
  projectId: "netflix-clone-27f96?",
  storageBucket: "netflix-clone-27f96?.firebasestorage.app",
  messagingSenderId: "151839717382",
  appId: "1:151839717382:web:95a7c0f0bfba63cfdb2b87",
  measurementId: "G-JC93H7TRG4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
