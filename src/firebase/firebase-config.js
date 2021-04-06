import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN ,
    projectId: process.env.REACT_APP_PROJECTID ,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };

//   const firebaseConfigTesting = {
//     apiKey: "AIzaSyA2KA1wUXFXbh4fewCoG9h8QBrxGqkpuW8",
//     authDomain: "react-app-tres.firebaseapp.com",
//     projectId: "react-app-tres",
//     storageBucket: "react-app-tres.appspot.com",
//     messagingSenderId: "160111508073",
//     appId: "1:160111508073:web:8749752282b0a6437e80f8"
//   };

//   if(process.env.NODE_ENV === 'test') {
//         //testing
//         firebase.initializeApp(firebaseConfigTesting)
//   } else {
//         //dev/prov
//         firebase.initializeApp(firebaseConfig)
//   }

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }

