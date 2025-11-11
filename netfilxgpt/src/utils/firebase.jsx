// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUQIOhM9WcdzHCci7mF3O1mKRzuXs0ddI",
  authDomain: "netflixgpt-39357.firebaseapp.com",
  projectId: "netflixgpt-39357",
  storageBucket: "netflixgpt-39357.firebasestorage.app",
  messagingSenderId: "688748561765",
  appId: "1:688748561765:web:cc5325e949d3b8e283cd8c",
  measurementId: "G-YLY2241V5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();