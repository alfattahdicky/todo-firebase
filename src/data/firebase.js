import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyt4uV2z14qVwlJEyrdm94Ee8RztBDXYs",
  authDomain: "auth-7ef08.firebaseapp.com",
  databaseURL: "https://auth-7ef08-default-rtdb.firebaseio.com",
  projectId: "auth-7ef08",
  storageBucket: "auth-7ef08.appspot.com",
  messagingSenderId: "780362806580",
  appId: "1:780362806580:web:52b2053965add4cb79a161",
  measurementId: "G-D970Z4CRXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const BASEURL = (userId) => `users/${userId}/todo`

const todoRef = (path) => {
  if(typeof path !== "string") return null;

  return ref(database, path);
};

const updateDatabase = (path, data) => {
  if(typeof data !== 'object') return null;
  return update(todoRef(path), data)
};

export {auth, database, todoRef, updateDatabase, BASEURL};