// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJl1oj7nsp395-DymGP29tH5abYy4WeE",
  authDomain: "crud-c8477.firebaseapp.com",
  databaseURL: "https://crud-c8477-default-rtdb.firebaseio.com",
  projectId: "crud-c8477",
  storageBucket: "crud-c8477.firebasestorage.app",
  messagingSenderId: "648061674820",
  appId: "1:648061674820:web:def747956ad44d69416311",
  measurementId: "G-E417C0DW1Q"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);