
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAUCw31vDpym1ebD8UCQEGXYDWDXJC5MF8",
  authDomain: "giftedchat-d53e7.firebaseapp.com",
  projectId: "giftedchat-d53e7",
  storageBucket: "giftedchat-d53e7.appspot.com",
  messagingSenderId: "459436855629",
  appId: "1:459436855629:web:d253631cc68eb2a3806704"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// let app;
// if (firebase.apps.length === 0) {
//   app=firebase.initializeApp(firebaseConfig);
// }
// else {
//   app = firebase.app();
// }

const db = getFirestore(app);
const auth = getAuth();
export { db, auth };