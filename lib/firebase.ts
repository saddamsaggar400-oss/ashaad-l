// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // Paste config here
  apiKey: "AIzaSyDtVZT1bL58TUaTFmS2tMs55pyxESmKCik",
  authDomain: "asahd022.firebaseapp.com",
  databaseURL: "https://asahd022-default-rtdb.firebaseio.com",
  projectId: "asahd022",
  storageBucket: "asahd022.firebasestorage.app",
  messagingSenderId: "1009965653576",
  appId: "1:1009965653576:web:556fa5d727a70da967c27d",
  measurementId: "G-ZLXYXDY9HW"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
