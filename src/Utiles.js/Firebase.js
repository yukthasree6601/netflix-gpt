// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAP5cCCu3l4RPz9CDWEdbPCPcXR4I7L0iQ",
  authDomain: "netflix-gpt-4a4e5.firebaseapp.com",
  projectId: "netflix-gpt-4a4e5",
  storageBucket: "netflix-gpt-4a4e5.firebasestorage.app",
  messagingSenderId: "885982477970",
  appId: "1:885982477970:web:fbb21d82913d044b09b04b",
  measurementId: "G-95CY5W1S2T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
