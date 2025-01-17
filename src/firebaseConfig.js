import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeY4XY1W5VBl2HZoewWxouWM8mU0wPB8c",
  authDomain: "todo-app-2c3ce.firebaseapp.com",
  databaseURL:
    "https://todo-app-2c3ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-2c3ce",
  storageBucket: "todo-app-2c3ce.firebasestorage.app",
  messagingSenderId: "755317864004",
  appId: "1:755317864004:web:906b26f4b16c3041f4ae11",
  measurementId: "G-Q1S1KZ20N9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
