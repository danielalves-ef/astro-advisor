import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator, httpsCallable } from "firebase/functions";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB52zq22w8i3VaNhWg7ukAE0v-ErxULRng",
    authDomain: "vue-advisor.firebaseapp.com",
    projectId: "vue-advisor",
    storageBucket: "vue-advisor.appspot.com",
    messagingSenderId: "245816893129",
    appId: "1:245816893129:web:4fe402468b1684d9d3b718",
    measurementId: "G-P61HFFJZH0"

};


const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();
const functions = getFunctions(firebase);
connectFunctionsEmulator(functions, "localhost", 5001);
// const analytics = getAnalytics(firebase);


export { firebase, auth, firestore, functions, storage, httpsCallable }