import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuQySOMtbeEdioaW7wovKB26II5TM0pkE",
  authDomain: "todo-170125.firebaseapp.com",
  databaseURL:
    "https://todo-170125-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-170125",
  storageBucket: "todo-170125.firebasestorage.app",
  messagingSenderId: "462861640866",
  appId: "1:462861640866:web:802c068819a6fb8d40e3fb",
  measurementId: "G-R3F6W1C0DB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
};
