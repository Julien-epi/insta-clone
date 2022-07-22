// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnNLJ8xd0HW4yn70Mj9jethFS67emR9ss",
  authDomain: "instagram-clone-822d4.firebaseapp.com",
  projectId: "instagram-clone-822d4",
  storageBucket: "instagram-clone-822d4.appspot.com",
  messagingSenderId: "367516744586",
  appId: "1:367516744586:web:90644b1c3f375d265b6673"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage};