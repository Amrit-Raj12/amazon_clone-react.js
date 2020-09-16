import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnpN4ynwyszqZJTkkEbNiLDjviw3Yigdc",
  authDomain: "clone-66d1b.firebaseapp.com",
  databaseURL: "https://clone-66d1b.firebaseio.com",
  projectId: "clone-66d1b",
  storageBucket: "clone-66d1b.appspot.com",
  messagingSenderId: "346468233436",
  appId: "1:346468233436:web:e76a07136e1436cc348419",
  measurementId: "G-G661BKHEBQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
