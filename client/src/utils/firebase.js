
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-f9b02.firebaseapp.com",
  projectId: "interviewagent-f9b02",
  storageBucket: "interviewagent-f9b02.firebasestorage.app",
  messagingSenderId: "5397580161",
  appId: "1:5397580161:web:0d21e64a5bb119faa90080"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}