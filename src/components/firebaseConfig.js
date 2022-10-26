// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC35EvF0rNf6UYd4csy4vEW1qFqQjKmuGQ",
  authDomain: "codealong01.firebaseapp.com",
  projectId: "codealong01",
  storageBucket: "codealong01.appspot.com",
  messagingSenderId: "406223764840",
  appId: "1:406223764840:web:0a4b4c94a4f2f9194c2add",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
