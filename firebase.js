import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrGqUoPS_QWpWFZ4Pd7J7R05SJlyzzivg",
  authDomain: "alphatransapp.firebaseapp.com",
  projectId: "alphatransapp",
  storageBucket: "alphatransapp.appspot.com",
  messagingSenderId: "54937571867",
  appId: "1:54937571867:web:c21e8bdbb798a571551ebe",
  measurementId: "G-K5PG9K57EL",
};

let firebaseApp;

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app;
}

const db = firebaseApp.firestore();

export default db;
