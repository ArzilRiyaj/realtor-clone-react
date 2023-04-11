// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5UCeBfjG45M0njaaOJlsPRsfNQ4z54l0",
  authDomain: "realtor-clone-react-5deb4.firebaseapp.com",
  projectId: "realtor-clone-react-5deb4",
  storageBucket: "realtor-clone-react-5deb4.appspot.com",
  messagingSenderId: "901005930725",
  appId: "1:901005930725:web:9dad186a2490675251a40c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();