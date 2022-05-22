// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI9Pui9wRBsUi5NosRVwcd-5ry8scjnlE",
    authDomain: "accessories-manufacturer.firebaseapp.com",
    projectId: "accessories-manufacturer",
    storageBucket: "accessories-manufacturer.appspot.com",
    messagingSenderId: "279697367575",
    appId: "1:279697367575:web:843c0a6a21c5bbc538f252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;