// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChzfxnBHvFdpQEcCaYE2jfvK5xfEwbv24",
  authDomain: "podcast-app-react-fffce.firebaseapp.com",
  projectId: "podcast-app-react-fffce",
  storageBucket: "podcast-app-react-fffce.appspot.com",
  messagingSenderId: "298813991321",
  appId: "1:298813991321:web:fa4b3949141d9e45b50b08",
  measurementId: "G-GQK65N62B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };