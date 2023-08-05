import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxboDnqrW4vAINIoQV9KI-CAhKaRwcUBU",
  authDomain: "food-app-61bd4.firebaseapp.com",
  databaseURL: "https://food-app-61bd4-default-rtdb.firebaseio.com",
  projectId: "food-app-61bd4",
  storageBucket: "food-app-61bd4.appspot.com",
  messagingSenderId: "774960018426",
  appId: "1:774960018426:web:b11db35993c6ad48fcaa43",
  measurementId: "G-M9PD7N2L7G"
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };