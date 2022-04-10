// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_axWi3GBhKFP8Vm53hZLnN58S-Vvo9z8",
  authDomain: "twitter-7db01.firebaseapp.com",
  projectId: "twitter-7db01",
  storageBucket: "twitter-7db01.appspot.com",
  messagingSenderId: "294078611683",
  appId: "1:294078611683:web:62d66948fe33bdc87a05d6",
  measurementId: "G-B1C01V0Z1F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
