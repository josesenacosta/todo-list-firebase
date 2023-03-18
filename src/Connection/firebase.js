// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZc-sUhGT7AAPgM25BrVmxpFbkjkqjdeQ',
  authDomain: 'todo-list-firebase-baa41.firebaseapp.com',
  projectId: 'todo-list-firebase-baa41',
  storageBucket: 'todo-list-firebase-baa41.appspot.com',
  messagingSenderId: '546089163937',
  appId: '1:546089163937:web:a6dd68e140fff8851724e0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
