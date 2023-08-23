import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyB5X10qs1uBfT62XHgUw72_oQZFe8c0-Qw",
  authDomain: "planowankoapp.firebaseapp.com",
  projectId: "planowankoapp",
  storageBucket: "planowankoapp.appspot.com",
  messagingSenderId: "51677663191",
  appId: "1:51677663191:web:150e88e52d15a39ee9c592",
  measurementId: "G-5DKTWGLSJ8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore;