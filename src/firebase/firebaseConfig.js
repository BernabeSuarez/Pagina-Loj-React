import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlQLx67qJkwqjCt0K7GnGuvb7ELgzk3Cs",
    authDomain: "la-otra-junta.firebaseapp.com",
    projectId: "la-otra-junta",
    storageBucket: "la-otra-junta.appspot.com",
    messagingSenderId: "449988112268",
    appId: "1:449988112268:web:c5f40026d83f6d01c530a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app);



