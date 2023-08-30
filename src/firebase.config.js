// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDL9u0DR74oM-BwpG4YVbhACy5yJkZ8kxA",
  authDomain: "shopping-list-ce264.firebaseapp.com",
  projectId: "shopping-list-ce264",
  storageBucket: "shopping-list-ce264.appspot.com",
  messagingSenderId: "846618440250",
  appId: "1:846618440250:web:44cbf8fba88667e1d07b03",
  measurementId: "G-HYBR1WNF9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}