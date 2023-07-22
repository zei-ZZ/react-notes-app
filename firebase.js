// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdKek1ADoITnQzC0TXirlm7kg_paoCmrw",
  authDomain: "react-notes-app-e051b.firebaseapp.com",
  projectId: "react-notes-app-e051b",
  storageBucket: "react-notes-app-e051b.appspot.com",
  messagingSenderId: "928618951657",
  appId: "1:928618951657:web:915a599a44de2d4ccf5178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
