
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import {  getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyArWoa7G3X3DnQ2eXnIHnJdNNSm5mm0q6Q",
    authDomain: "fir-f6d39.firebaseapp.com",
    projectId: "fir-f6d39",
    storageBucket: "fir-f6d39.appspot.com",
    messagingSenderId: "103553827775",
    appId: "1:103553827775:web:df1bea7c76fad5af87570a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{
    app,
    auth,
    signInWithEmailAndPassword,
  }