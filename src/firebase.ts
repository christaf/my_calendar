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

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth);
export {auth};