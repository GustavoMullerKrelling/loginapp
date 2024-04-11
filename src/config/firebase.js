import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
;
const firebaseConfig = {
  apiKey: "AIzaSyAKJEXLpcv5SZgj8-qXuwbqrw2gli5vsh8",
  authDomain: "applogin-47d92.firebaseapp.com",
  projectId: "applogin-47d92",
  storageBucket: "applogin-47d92.appspot.com",
  messagingSenderId: "403249501466",
  appId: "1:403249501466:web:551cfc8e0c9caff4ea88a3"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);