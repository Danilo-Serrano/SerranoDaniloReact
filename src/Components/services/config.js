// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2A7aOYD3qCKqlNuUv6wUirPnI62BWHKk",
    authDomain: "gamerzone-e-commerce.firebaseapp.com",
    projectId: "gamerzone-e-commerce",
    storageBucket: "gamerzone-e-commerce.firebasestorage.app",
    messagingSenderId: "698361825274",
    appId: "1:698361825274:web:9289efb799ab75ffdd8643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);