import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyt4uV2z14qVwlJEyrdm94Ee8RztBDXYs",
  authDomain: "auth-7ef08.firebaseapp.com",
  projectId: "auth-7ef08",
  storageBucket: "auth-7ef08.appspot.com",
  messagingSenderId: "780362806580",
  appId: "1:780362806580:web:52b2053965add4cb79a161",
  measurementId: "G-D970Z4CRXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;