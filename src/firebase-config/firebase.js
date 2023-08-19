import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBgzAtIe0uvvCHBfX3tcLAjZjZu44362M0",
  authDomain: "planowanko-ce87c.firebaseapp.com",
  projectId: "planowanko-ce87c",
  storageBucket: "planowanko-ce87c.appspot.com",
  messagingSenderId: "165547680535",
  appId: "1:165547680535:web:25100ec58fea1be4e20d52",
  measurementId: "G-L3PFWZ6C3T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export default app