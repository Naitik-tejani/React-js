import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbtXN_PoXUeJOoM1bJJrqPFbKg87Ev4WA",
  authDomain: "pr-carrot-web-firebase.firebaseapp.com",
  databaseURL: "https://pr-carrot-web-firebase-default-rtdb.firebaseio.com",
  projectId: "pr-carrot-web-firebase",
  storageBucket: "pr-carrot-web-firebase.firebasestorage.app",
  messagingSenderId: "573237168768",
  appId: "1:573237168768:web:5079200bb2f3b88620f465",
  measurementId: "G-GK4B29E3V0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
