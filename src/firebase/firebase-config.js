import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBXSPJ9yN5_et0128oJIwxxYD4kA5pN1qM",
    authDomain: "react-app-dos.firebaseapp.com",
    projectId: "react-app-dos",
    storageBucket: "react-app-dos.appspot.com",
    messagingSenderId: "118874503537",
    appId: "1:118874503537:web:fef1dcd6ebe13038ba5ed0"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }

