import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyDj27hWZFL7JLyeBVQsy_Ph-77-tf-3Cl4",
  authDomain: "attendance-management-89545.firebaseapp.com",
  projectId: "attendance-management-89545",
  storageBucket: "attendance-management-89545.firebasestorage.app",
  messagingSenderId: "951061672565",
  appId: "1:951061672565:web:bcc365de90c5afcc90be3c",
  measurementId: "G-Q3W2GHDGJ7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { app, auth, db,provider };


