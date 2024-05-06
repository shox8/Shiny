import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcEkcuvLzO6cHok5pJyYyLA6aPUhtQSAs",
  authDomain: "shiny-17858.firebaseapp.com",
  projectId: "shiny-17858",
  storageBucket: "shiny-17858.appspot.com",
  messagingSenderId: "724204705511",
  appId: "1:724204705511:web:506279c20916fc3a60b442",
  measurementId: "G-N1JZB91X5B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
