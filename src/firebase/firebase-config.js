import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDGi1I-s2NTMQGK4eu8ScHaIJyBVo6865c",
    authDomain: "react-app-curso-e5940.firebaseapp.com",
    projectId: "react-app-curso-e5940",
    storageBucket: "react-app-curso-e5940.appspot.com",
    messagingSenderId: "112161779800",
    appId: "1:112161779800:web:1b19de3a11744372da1a2d"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }

