// Firebase configuration for portfolio reactions
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCzvviH4Qx9jbXU3BB7CgfJW4cP0Nd8yUs",
    authDomain: "etuition-hub.firebaseapp.com",
    databaseURL: "https://etuition-hub-default-rtdb.firebaseio.com",
    projectId: "etuition-hub",
    storageBucket: "etuition-hub.firebasestorage.app",
    messagingSenderId: "65902682430",
    appId: "1:65902682430:web:c7b18cd70b4c4281774c6f",
    measurementId: "G-7WHKGN5ZG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
