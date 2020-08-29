import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTU8RS6Zb2vaFH-aHrMK9SUPTPY1Ucclg",
    authDomain: "facebook-41341.firebaseapp.com",
    databaseURL: "https://facebook-41341.firebaseio.com",
    projectId: "facebook-41341",
    storageBucket: "facebook-41341.appspot.com",
    messagingSenderId: "667716843271",
    appId: "1:667716843271:web:9e993c63948b34777b77a2",
    measurementId: "G-QC9GHFVGRG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;