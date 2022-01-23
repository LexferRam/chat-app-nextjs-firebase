// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGs5EUiDzoWkjiU3IHoPCYWVrAaH-0s_U",
    authDomain: "chatappfirebase-fadff.firebaseapp.com",
    projectId: "chatappfirebase-fadff",
    storageBucket: "chatappfirebase-fadff.appspot.com",
    messagingSenderId: "165856611370",
    appId: "1:165856611370:web:cf00fd5e5604d5e56d0753"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }