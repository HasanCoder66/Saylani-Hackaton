

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, EmailAuthProvider, reauthenticateWithCredential, updatePassword, } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, getDocs, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyDFa7QA9XZRillJX8e6dJn6bwl3oaVWSZ8",
    authDomain: "hackaton-saylaani.firebaseapp.com",
    projectId: "hackaton-saylaani",
    storageBucket: "hackaton-saylaani.appspot.com",
    messagingSenderId: "972797441777",
    appId: "1:972797441777:web:e235d1380fbf79f6fa9b50",
    measurementId: "G-CJ4JJKMF5V"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);










export {
    db,
    getAuth,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    app,
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    onAuthStateChanged,
    query,
    where,
    getDocs,
    signOut,
    getDoc,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    serverTimestamp


}