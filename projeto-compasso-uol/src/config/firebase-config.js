import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBv9t2FN88DWauxPySecrvqFUbnZVah38s",
    authDomain: "projeto-compasso-uol.firebaseapp.com",
    projectId: "projeto-compasso-uol",
    storageBucket: "projeto-compasso-uol.appspot.com",
    messagingSenderId: "884275263740",
    appId: "1:884275263740:web:233aa5c6e22f912b063f79",
    measurementId: "G-X1EY8MHKZE"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;