import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvIxkAMMvsad_AY3ZLRLMw7WlIM55BypA",
    authDomain: "neon-814a8.firebaseapp.com",
    projectId: "neon-814a8",
    storageBucket: "neon-814a8.appspot.com",
    messagingSenderId: "196717384763",
    appId: "1:196717384763:web:c21c7505b3b8f12552f81e",
    measurementId: "G-1BC8TB8QLT"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)

export { auth, db }