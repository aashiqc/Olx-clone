// Import the functions you need from the SDKs you need
import 'firebase/auth'
import 'firebase/firestore'
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpMqbx3UshYy40h4nccMyNbrpAitfZ0DE",
  authDomain: "olx-app-b89b2.firebaseapp.com",
  projectId: "olx-app-b89b2",
  storageBucket: "olx-app-b89b2.appspot.com",
  messagingSenderId: "5650170095",
  appId: "1:5650170095:web:0cab273caaaa42e0d99b1a",
  measurementId: "G-SJ46V0J225"
};

export default firebase.initializeApp(firebaseConfig)