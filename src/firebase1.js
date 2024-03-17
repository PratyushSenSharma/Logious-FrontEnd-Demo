import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3gGE1jWoMqCIhNanixhzP8EU-Efy5quo",
  authDomain: "logious-8d5ce.firebaseapp.com",
  databaseURL: "https://logious-8d5ce-default-rtdb.firebaseio.com",
  projectId: "logious-8d5ce",
  storageBucket: "logious-8d5ce.appspot.com",
  messagingSenderId: "17164946793",
  appId: "1:17164946793:web:4cf2ac08b03279d0db01f8",
  measurementId: "G-PXE59R7YB0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;