// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ZLayFYAZVbUGUlnb2_ZLe6FwjPKdekI",
  authDomain: "keep-clone-684e1.firebaseapp.com",
  projectId: "keep-clone-684e1",
  storageBucket: "keep-clone-684e1.appspot.com",
  messagingSenderId: "745009963149",
  appId: "1:745009963149:web:7d74b175db002aa04202c4",
  measurementId: "G-XGBQ02C73Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
