import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAXXfvd9ZNuBXbr6x9YJpgEUqjQTMEhtog",
    authDomain: "facebook-2-94882.firebaseapp.com",
    projectId: "facebook-2-94882",
    storageBucket: "facebook-2-94882.appspot.com",
    messagingSenderId: "1028229755514",
    appId: "1:1028229755514:web:af2837676f9d7fa9ee81c3",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };