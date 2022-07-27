// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCB97gcki26fluhmQbTvYa2l9RYlscYrS4",
    authDomain: "loj-page.firebaseapp.com",
    databaseURL: "https://loj-page-default-rtdb.firebaseio.com",
    projectId: "loj-page",
    storageBucket: "loj-page.appspot.com",
    messagingSenderId: "711425154022",
    appId: "1:711425154022:web:e1d9211f7380570dd21427",
    measurementId: "G-781BFJ800J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);