import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVxbgUsAnzjH6iQVpDgrOCsYgLFmRYW1M",
    authDomain: "my-calendar-e4021.firebaseapp.com",
    projectId: "my-calendar-e4021",
    storageBucket: "my-calendar-e4021.appspot.com",
    messagingSenderId: "973976906044",
    appId: "1:973976906044:web:e2188954477238c161d639",
    measurementId: "G-Y38N508YRP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
console.log(app)
// const analytics = getAnalytics(app);
// console.log(analytics)
const auth = firebase.auth();
console.log("Firebase initialized")
const db = getFirestore(app);

export {db, auth, app};