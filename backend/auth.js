import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const auth = () => {
  return (true)
}

const firebaseConfig = {
  apiKey: "AIzaSyAvID_nFw90VkD3bLybv-K-LB2dDFJ8oX8",
  authDomain: "slap-vpn.firebaseapp.com",
  projectId: "slap-vpn",
  storageBucket: "slap-vpn.appspot.com",
  messagingSenderId: "381778904101",
  appId: "1:381778904101:web:0bc4572f0f2881c5e12bcc",
  measurementId: "G-TST3JJ7NMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default auth