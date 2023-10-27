import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrb8EyJ9-8yC95DQd-rL_3xROACjr3eew",
  authDomain: "fir-test-41ed5.firebaseapp.com",
  projectId: "fir-test-41ed5",
  storageBucket: "fir-test-41ed5.appspot.com",
  messagingSenderId: "980424876458",
  appId: "1:980424876458:web:61f653361a77e4389b8bd3"
};

const app = initializeApp(firebaseConfig); // Initalizes app firebase config
const db = getFirestore(app);

export default db;
