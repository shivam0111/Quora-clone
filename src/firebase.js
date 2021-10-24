import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ic0zgTfZn-T7bSAvIj29kWKQrtDN-Ng",
  authDomain: "quora-clone-8ac3a.firebaseapp.com",
  projectId: "quora-clone-8ac3a",
  storageBucket: "quora-clone-8ac3a.appspot.com",
  messagingSenderId: "498081266189",
  appId: "1:498081266189:web:8b6e987de6e96da2c43344",
  measurementId: "G-3CD2YHT8J3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
